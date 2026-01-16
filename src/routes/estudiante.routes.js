const express = require ('express')
const router = express.Router()
const estudianteController=require ('../controllers/estudiante.controller')

router.post('/', estudianteController.crearEstudiante)
router.get('/lista', estudianteController.listarEstudiante)
router.get('/aprobados', estudianteController.listaAprobados)
router.get('/reprobados', estudianteController.listaReprobados)
router.delete('/eliminar/:nombre', estudianteController.eliminarEstudiantes)



module.exports = router