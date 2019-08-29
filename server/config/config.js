// ============================
//           PUERTO
// ============================

process.env.PORT = process.env.PORT || 3000;


// ============================
//           ENTORNO
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//      VENCIMIENTO DEL TOKEN
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
//    SEED de autentificacion 
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ============================
//        BASE DE DATOS
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;

    //mongodb+srv://marcolpzmndz:VhRUFk42fzlCBbRM@cluster0-4katf.mongodb.net/cafe;
}

process.env.URLDB = urlDB;


// ============================
//      Google Client Id
// ============================


process.env.CLIENT_ID = process.env.CLIENT_ID || '1039619040612-4g2dq34ln2cjp48i4s9s33r6bcli2b34.apps.googleusercontent.com';