const express = require("express")
const router = express.Router();
const {updateUser, createUser, getUserById, deleteUser} = require("../../apis/index")

// CREATE
router.post('/user', createUser);

// READ ONE
router.get('/:id', getUserById);

// UPDATE
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

module.exports = router;