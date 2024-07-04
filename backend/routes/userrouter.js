import express from 'express';
import { Login, Logout, Register } from '../controllers/Register.js';
import {  Mycardrecieved, Mycardsent,deletecard } from '../controllers/Mylist.js';
 
const router= express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/mylist").post(Mycardsent);
router.route("/getlist").post(Mycardrecieved);
router.route("/deletecard").post(deletecard);

export default router;
