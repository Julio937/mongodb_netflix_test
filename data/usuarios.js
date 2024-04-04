db.createCollection('usuarios');
var usuarios = [
  {
    _id: 'USUARIO_1',
    nombres: 'Juan',
    apellidos: 'Pérez',
    numero_documento: '123456789',
    numero_telefono: '123456789',
    email: 'juan@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1990-01-01'),
    perfiles: [
      {
        _id: 'PERFIL_1_U1',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 1921986325,
        tipo_perfil: 'Adulto',
        pin_perfil: '1234',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_11',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 9.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 19216811,
    },
  },
  {
    _id: 'USUARIO_2',
    nombres: 'María',
    apellidos: 'Gómez',
    numero_documento: '987654321',
    numero_telefono: '987654321',
    email: 'maria@example.com',
    password: 'hashed_password',
    fecha_nacimiento: ISODate('1995-05-05'),
    perfiles: [
      {
        _id: 'PERFIL_2',
        nombre_perfil: 'Perfil Principal',
        ip_perfil: 19216811, // Misma IP que la del usuario
        tipo_perfil: 'Adulto',
        pin_perfil: '5678',
        recomendaciones: [],
        historial_reproducciones: [],
      },
      {
        _id: 'PERFIL_3',
        nombre_perfil: 'Perfil Secundario',
        ip_perfil: 123456789, // Diferente IP
        tipo_perfil: 'Niño',
        pin_perfil: '7890',
        recomendaciones: [],
        historial_reproducciones: [],
      },
    ],
    pais: 'PAIS_11',
    estado: 'activo',
    preferencias: {
      idioma: 'IDIOMA_2',
      pago: [
        {
          metodo_pago: 'tarjeta_de_credito',
          monto: 9.99,
          fecha_pago: ISODate('2024-03-25T15:00:00'),
        },
      ],
      estado_suscripcion: 'activo',
      ip: 1921986325, // IP diferente del perfil secundario
    },
  },
];
