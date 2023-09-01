var express = require('express');
var router = express.Router();
var productosModel = require('../../models/productosModel');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {

  var productos = await productosModel.getProductos();

  productos = productos.map(productos => {
    if (productos.img_id){
      const imagen = cloudinary.image(productos.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'  //tambien se puede usar 'pad'
      });
      return{
        ...productos,
        imagen
      }
    }else{
      return{
        ...productos,
        imagen: ''
      }
    }
  });

    res.render('admin/productos', {    //login.hbs
      layout: 'admin/layout',    //layout.hbs
      persona: req.session.nombre,
      productos

  });
});


router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  })
});


router.post('/agregar', async(req, res, next) => {
  try{
    var img_id = '';
    console.log(req.files.imagen);
    if (req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if(req.body.cantidad != "" && req.body.titulo != "" && req.body.subtitulo != "" && req.body.precio != ""){
      await productosModel.insertProductos({
        ...req.body,  //Es un 'spread' que trae: 'cantidad', 'titulo', 'subtitulo' y 'precio'
        img_id
      });
      res.redirect('/admin/productos')
    }else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se pudo cargar el producto'
    })
  }
})


/*Para eliminar un elemento de la lista de productos*/
router.get('/eliminar/:id_producto', async (req, res, next) => {
  var id = req.params.id_producto; //para capturar el id

  let productos = await productosModel.getProductosById(id);
  if(productos.img_id){
    await (destroy(productos.img_id));
  }

  await productosModel.deleteProductosById(id);
  res.redirect('/admin/productos');
});


/*Para mostrar el formulario y mostar un elemento de la lista de productos para luego modificar*/
router.get('/modificar/:id_producto', async(req,res,next) => {
  var id = req.params.id_producto;
  var productos = await productosModel.getProductosById(id);


  //Vista
  res.render('admin/modificar', {//modificar.hbs
    layout: 'admin/layout',
    productos
  })
});


router.post('/modificar',async(req,res,next) => {
  try{
    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if(req.body.img_delete === "1"){
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original){
      await(destroy(req.body.img_original));
    }

    var obj= {
      cantidad: req.body.cantidad,
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      precio: req.body.precio,
      img_id
    }

    await productosModel.modificarProductosById(obj, req.body.id_producto);
    res.redirect('/admin/productos');
  }
  catch(error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, 
      message: 'no se modifico el producto'
    })
  }
})


module.exports = router;
