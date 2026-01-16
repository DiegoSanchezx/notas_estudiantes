const estudianteService = require('../services/estudiante.services')

const crearEstudiante = (req,res) =>{
    const {nombre,notaDefinitiva} = req.body
    const resultado = estudianteService.agregarEstudiante({nombre,notaDefinitiva})
    res.status(201).json({
        mensaje: 'el estudiante y su nota se agregaron con exito',
        nombre_y_nota: resultado
    })
}
const eliminarEstudiantes=(req,res) =>{
    const {nombre} = req.params
    console.log(req)
    const eliminar = estudianteService.eliminarEstudiantes(nombre)

    if(eliminar){
        res.json({
            mensaje: 'estudiante eliminado con exito'
        })
    }else
        res.status(404).json({
            mensaje: 'estudiante no encontrado'
        })

}
const listarEstudiante=(req,res) =>{
    const lista = estudianteService.obtenerTodos()
    res.status(201).json({
        mensaje: 'La lista se genero correctamente',
        lista: lista
    })


}

const listaAprobados =(req,res) =>{
    const lista = estudianteService.obtenerAprobados()
    res.status(201).json({
        mensaje: 'la lista de estudiantes aprobados se genero correctamente',
        lista : lista
    }) 
}

const listaReprobados = (req, res) =>{
    const lista =estudianteService.obtenerReprobados()
    res.status(201).json({
        mensaje: 'la lista de estudiantes reprobados se genero correctamente',
        lista: lista
    })
}
module.exports = {crearEstudiante, listarEstudiante, listaAprobados, listaReprobados, eliminarEstudiantes}