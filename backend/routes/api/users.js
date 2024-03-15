const express = require('express');
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const asyncHandler = require('express-async-handler');
const { User, PendingSignUp } = require('../../db/models');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs/dist/bcrypt');
require('dotenv').config();

const router = express.Router();

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});


const validateSignup = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("username")
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Please provide a username with at least 4 characters."),
    check("username")
        .not()
        .isEmail()
        .withMessage("Username cannot be an email."),
    check("password")
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be 6 characters or more.")
        .custom((value) => {
            // Custom validation function to check for spaces
            if (/\s/.test(value)) {
                throw new Error("Password must not contain spaces.");
            }

            // Custom validation function to check for at least one uppercase letter
            if (!/[A-Z]/.test(value)) {
                throw new Error("Password must contain at least one uppercase letter.");
            }

            return true;
        }),
    handleValidationErrors,
];

// POST /api/users
// Handle user signup request
// router.post('/',
//     validateSignup,
//     asyncHandler(async (req, res, next) => {
//         const { email, username, password } = req.body;

//         try {
//             // Generate token
//             const token = generateToken();
//             const hashedPassword = bcrypt.hashSync(password);

//             // Save token and user details in pending signups table
//             await PendingSignUp.create({ email, username, hashedPassword, token });

//             // Send email notification to admin
//             await sendSignupNotification(email, username, token);

//             return res.status(200).json({
//                 message: 'Message One: Your sign-up request has been received. Please wait for approval.',
//             });
//         } catch (err) {
//             const registeredUserWithEmail = await User.findOne({
//                 where: {
//                     email
//                 }
//             });
//             if (registeredUserWithEmail) {
//                 return res.status(401).json({
//                     errors: ["This email is already registered with Algify. Please Login."]
//                 });
//             }

//             const registeredUserWithUsername = await User.findOne({
//                 where: {
//                     username
//                 }
//             });

//             if (registeredUserWithUsername) {
//                 return res.status(401).json({
//                     errors: ["This username is already registered with Algify. Please Choose another one."]
//                 })
//             }

//             const waitingForApproval = await PendingSignUp.findOne({
//                 where: {
//                     email
//                 }
//             });

//             if (waitingForApproval) {
//                 return res.status(401).json({
//                     errors: ["This user waiting for approval from Admin."]
//                 })
//             }

//             console.error("Signup failed.", err);
//             return next(err);
//         }
//     }));

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res, next) => {
        const { email, username, password } = req.body;

        try {
            // Check if the user already exists in the Users table
            const registeredUserWithEmail = await User.findOne({
                where: {
                    email
                }
            });

            if (registeredUserWithEmail) {
                return res.status(401).json({
                    errors: ["This email is already registered with Algify. Please Login."]
                });
            }

            const registeredUserWithUsername = await User.findOne({
                where: {
                    username
                }
            });

            if (registeredUserWithUsername) {
                return res.status(401).json({
                    errors: ["This username is already registered with Algify. Please Choose another one."]
                });
            }

            // Check if the user is already waiting for approval in the PendingSignUp table
            const waitingForApproval = await PendingSignUp.findOne({
                where: {
                    email
                }
            });

            if (waitingForApproval) {
                return res.status(401).json({
                    errors: ["This user is waiting for approval from Algify Admin."]
                });
            }

            // If the user is not found in either table, proceed with creating a new pending signup entry
            const token = generateToken();
            const hashedPassword = bcrypt.hashSync(password);

            await PendingSignUp.create({ email, username, hashedPassword, token });

            await sendSignupNotification(email, username, token);

            return res.status(200).json({
                message: 'Message One: Your sign-up request has been received. Please wait for approval.'
            });
        } catch (err) {
            console.error("Signup failed.", err);
            return next(err);
        }
    })
);

// Function to generate token
function generateToken(length = 20) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

// Function to send email notification to admin
async function sendSignupNotification(email, username, token) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'New User Sign-Up Request',
        html: `
            <p>A new user has requested to sign up:</p>
            <p>Email: ${email}</p>
            <p>Username: ${username}</p>
            <p>Please approve the sign-up request by clicking <a href="http://localhost:3000/api/users/approve?token=${token}">here</a>.</p>
        `,
    };

    await transporter.sendMail(mailOptions);
}


async function approvedNotification(email, username) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Algify sign up approved",
        html: `
            <p>Hello, ${username},</p>
            <p>Your request to sign up for Algify has been approved!</p>
            <p>You can now log in to your account and start exploring Algify's features.</p>
            <p>Click <a href="http://localhost:3001/login">here</a> to log in.</p>
        `
    };

    await transporter.sendMail(mailOptions);
}


router.get('/approve', asyncHandler(async (req, res) => {
    const { token } = req.query;

    try {
        // Find pending sign-up request by token
        const pendingSignup = await PendingSignUp.findOne({ where: { token } });

        if (!pendingSignup) {
            return res.status(404).json({
                title: 'Resource Not Found',
                message: "The requested resource couldn't be found.",
                errors: ["The requested resource couldn't be found."]
            });
        }

        // Extract email, username, and password from pendingSignup
        const { email, username, hashedPassword } = pendingSignup;

        // Sending email to user that he can log in now.
        approvedNotification(email, username);


        // Create the user in the database
        const user = await User.create({
            email, hashedPassword, username
        })

        // Delete the pending sign-up record
        await pendingSignup.destroy();

        // Respond with the created user
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error approving user:', error);
        return res.status(500).json({
            title: 'Internal Server Error',
            message: 'An unexpected error occurred while approving the user.'
        });
    }
}));

// POST /api/users
// Handle user signup request
// router.post(
//     '/',
//     validateSignup,
//     asyncHandler(async (req, res, next) => {
//         const { email, username, password } = req.body;

//         try {
//             // Generate token
//             const token = generateToken();

//             // Save token, email, username, and password in pending signups table
//             await PendingSignUp.create({ email, username, password, token });

//             // Send email notification to admin
//             await sendSignupNotification(email, username, token);

//             return res.status(200).json({
//                 message: ' Message Two: Your sign-up request has been received. Please wait for approval.',
//             });
//         } catch (error) {
//             console.error('Signup failed.', error);
//             return next(error);
//         }
//     })
// );

module.exports = router;
