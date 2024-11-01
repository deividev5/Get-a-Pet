const router = require('express').Router()

//controller
const PetController =  require("../controllers/PetController")

//helpers
const verifyToken = require("../helpers/verify-token")
const {imageUpload} = require("../helpers/image-upload")
const Pet = require('../models/Pet')


router.post ('/create',verifyToken,imageUpload.array('images'),PetController.create)
router.get ('/', PetController.getAll)
router.get('/mypets',verifyToken, PetController.getAllUserPets)
router.get ('/myadoptions',verifyToken, PetController.getAllUserAdoptions)
router.get('/:id', PetController.getPetById)
router.delete('/:id', verifyToken, PetController.removePetById)
router.patch('/:id', verifyToken, imageUpload.array('images'), PetController.updatePet)
router.patch('/schedule/:id', verifyToken, PetController.schedule )
router.patch('/conclude/:id',verifyToken,PetController.concludeAdoption)


module.exports = router