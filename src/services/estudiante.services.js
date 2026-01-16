let estudiantes = []

const agregarEstudiante = (datos) =>{
    const nuevoEstudiante = {
        nombre : datos.nombre,
        notaDefinitiva : Number(datos.notaDefinitiva),
    }

    estudiantes.push(nuevoEstudiante)
    return nuevoEstudiante
}

const obtenerTodos = ()=>{
    return estudiantes
}

const obtenerAprobados =() =>{
    return estudiantes.filter(estudiante => estudiante.notaDefinitiva >= 3.0 )
}

const obtenerReprobados =() =>{
    return estudiantes.filter(estudiante => estudiante.notaDefinitiva < 3.0 )
}

const eliminarEstudiantes = (nombreaBorrar) =>{
    estudiantes = estudiantes.filter(estudiante => estudiante.nombre !== nombreaBorrar)
    return estudiantes
}

module.exports = {agregarEstudiante, obtenerTodos, obtenerAprobados, obtenerReprobados, eliminarEstudiantes}