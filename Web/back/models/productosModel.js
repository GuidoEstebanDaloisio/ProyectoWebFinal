var pool = require('./bd');

async function getProductos(){
    var query = 'select * from productos';
    var rows = await pool.query(query);
    return rows; 
}

async function insertProductos(obj){
    try{
        var query = "insert into productos set ?";
        var rows = await pool.query(query, [obj])
        return;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProductosById(id_producto){
    var query = 'delete from productos where id_producto = ?';
    var rows = await pool.query(query,[id_producto]);
    return rows;
}

async function getProductosById(id_producto){
    var query = "select * from productos where id_producto = ?"
    var rows = await pool.query(query,[id_producto]);
    return rows[0];
}

async function modificarProductosById(obj, id_producto){
    try{
        var query = 'update productos set ? where id_producto = ?';
        var rows = await pool.query(query, [obj, id_producto]);
        return rows;
    } catch (error){
        throw error;
    }
}

module.exports = {getProductos, insertProductos, deleteProductosById, getProductosById, modificarProductosById}