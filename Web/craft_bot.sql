-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 01-09-2023 a las 11:50:31
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `craft_bot`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `titulo` text NOT NULL,
  `subtitulo` text NOT NULL,
  `precio` int NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `cantidad`, `titulo`, `subtitulo`, `precio`, `img_id`) VALUES
(1, 7, 'Kit para Armar un Dron', 'Construye tu propio dron y aprende sobre aerodinámica y control remoto.', 199, 'mjqigkiif0jgrwjtzbxs'),
(2, 3, 'Kit Robot Nadador', 'Crea un robot capaz de moverse y realizar tareas en el agua, como explorar el fondo marino.', 299, 'segvsrmrhlfvtqymhper'),
(3, 122, 'Kit para una Maceta Inteligente', 'Arma una maceta inteligente que monitorea y cuida de tus plantas de forma automática.', 399, 'oiia2yawqh4ibwz4xcpw'),
(4, 1, 'Kit Brazo Robótico', 'Arma tu propio brazo robótico con movimientos precisos y controlado por una placa programable.', 599, 'zbbunrnrt7jjzqy3vmq8'),
(5, 34, 'Kit Robot Seguidor de Línea', 'Construye un robot capaz de seguir líneas y realizar movimientos basados en sensores.', 129, 'xptrgmtt9ki3geikhj0u'),
(8, 122, 'Kit Robot Sumo', 'Desafía a tus amigos con un kit para construir robots sumo y competir en emocionantes batallas.', 89, 'mwjfmjnzgkdisyenkjka'),
(7, 11, 'Robot animal', 'Construye un robot con forma de animal y personalízalo. Elige entre diferentes opciones y funciones.', 12322, 'ystpkwoc4vefpgvfgpwe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'jorge', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'ana', '202cb962ac59075b964b07152d234b70');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

select * from usuarios;
