function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'Admin' || value === 'admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Carlos', 'admin');
usuarios.set('Carol', 'User');
usuarios.set('Amanda', 'Admin');
usuarios.set('Alberto', 'User');

console.log(getAdmins(usuarios));