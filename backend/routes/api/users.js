const express = require("express");
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const router = express.Router();

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

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    servide: "gmail",
    auth: {
        user: 
    }
})

// Sign up
router.post(
    "",
    validateSignup,
    async (req, res, next) => {
        const { email, password, username } = req.body;

        try {
            // Send email notification to algify admin
            await sendSignupNotification(email, username);

            // Respond to user indicating that sign-up request has been received
        }
    }
    // asyncHandler(async (req, res, next) => {
    //     const { email, password, username } = req.body;

    //     try {
    //         const user = await User.signup({ email, username, password });

    //         await setTokenCookie(res, user);

    //         return res.json({
    //             user,
    //         });
    //     } catch (err) {
    //         const registeredUserWithEmail = await User.findOne({
    //             where: {
    //                 email
    //             }
    //         });
    //         if (registeredUserWithEmail) {
    //             return res.status(401).json({
    //                 errors: ["This email is already registered with Algify."]
    //             });
    //         }

    //         const registeredUserWithUsername = await User.findOne({
    //             where: {
    //                 username
    //             }
    //         });

    //         if (registeredUserWithUsername) {
    //             return res.status(401).json({
    //                 errors: ["This username is already registered with Algify. Please Choose another one."]
    //             })
    //         }

    //         console.error("Signup failed.", err);
    //         return next(err);
    //     }
    // }),
);

module.exports = router;