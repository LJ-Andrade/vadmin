-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2017 a las 19:47:38
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vadmin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_01_14_060743_add_categories_table', 1),
(4, '2017_01_14_061057_add_articles_table', 1),
(5, '2017_01_14_061856_add_images_table', 1),
(6, '2017_01_14_063259_add_tags_table', 1),
(7, '2017_01_19_190731_AddSlugToArticlesTable', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user-gen.jpg',
  `type` enum('member','admin') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'member',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'javzero', 'javzero@hotmail.com', '$2y$10$gOwPzwLnHjhwPOpLSAR7AO6fsbKbDW7ajTgBITSYraDLEkjY338OW', '1488150234.jpg', 'admin', 'riIMmmPqAcLwzBgfpBFIzcUVCtrEMKBna4OPgTzLCnkKkz8JVi9eh0aq79Nw', '2017-01-19 07:04:46', '2017-02-27 02:03:56'),
(2, 'viole', 'admstudiovimana@gmail.com', '$2y$10$gOwPzwLnHjhwPOpLSAR7AO6fsbKbDW7ajTgBITSYraDLEkjY338OW', 'user-gen.jpg', 'member', 'kBjqKvoCevhP5X5iyMftxAuEHlm5pmH6PC8W7gNQGuM7FbHziQudgDskGE7m', '2017-01-19 23:53:30', '2017-01-22 08:21:40'),
(3, 'dasda', 'admstudiovimana@gmail.comdasdas', '$2y$10$.87spSxKT6H72GsF2xuTfuq//Ga/Lfj3eZrtY1tqf5vOvLOxhFz.6', 'user-gen.jpg', 'admin', NULL, '2017-01-19 23:57:48', '2017-01-19 23:57:48'),
(5, 'sdasdasd', 'admin@adsdadmin.com', '$2y$10$k5N3.KeHaHuAzrocPtUfh.S4rzIfU.i3Rk1GEQCNxBW01AVSMmWO.', 'user-gen.jpg', 'member', NULL, '2017-01-20 00:01:03', '2017-01-20 00:01:03'),
(10, 'Mr. Benny Will IV', 'ashleigh46@davis.net', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:41', '2017-02-27 21:25:41'),
(11, 'Dorothy Schmitt', 'onie.hartmann@runte.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:41', '2017-02-27 21:25:41'),
(13, 'Dr. Garrison Kessler PhD', 'amparo.mcglynn@mayer.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(15, 'Ms. Evangeline Cummings DVM', 'herbert.cartwright@haley.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(18, 'Gretchen Shields', 'bergstrom.tiffany@ledner.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(20, 'Mrs. Laurine Hintz II', 'vvon@morissette.info', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(21, 'Afton Stoltenberg', 'lilian28@hotmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(22, 'Savanna Veum', 'elisabeth13@hotmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(23, 'Alexandrea Klocko', 'cristal91@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(24, 'Marlon Nicolas', 'stracke.arnold@marks.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(25, 'Dr. Damien Barrows', 'tullrich@kris.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(26, 'Lorenzo Russel III', 'pcarter@hotmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(27, 'Miss Lexie Armstrong DVM', 'sydnee.torp@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(28, 'Gerardo Deckow', 'wsanford@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(29, 'Jarrett Gorczany', 'vrutherford@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(30, 'Jasmin Simonis', 'hermann.trinity@rowe.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(31, 'Kadin Hyatt MD', 'qschmidt@hotmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(32, 'Mr. Lesley Gislason', 'anna28@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(33, 'Iva Gorczany', 'forrest.runte@koch.net', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(34, 'Brayan Yundt', 'simonis.oceane@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(35, 'Dr. Theodore Koepp', 'bethany.pfannerstill@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(36, 'Kailee Swaniawski Sr.', 'njaskolski@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(37, 'Dr. Margot Marks', 'morar.vesta@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(38, 'Matt Bauch', 'goconner@moore.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(39, 'Alejandra Ondricka', 'logan10@mosciski.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(40, 'Eloise Tillman Jr.', 'mose39@conroy.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(41, 'Aleen Hilpert', 'heaney.odessa@gmail.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(42, 'Miss Maude DuBuque DDS', 'jamaal40@pfannerstill.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(43, 'Ms. Marcelle Collins MD', 'lebsack.deshawn@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(44, 'Winston Schaden', 'eleazar.schoen@turcotte.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(45, 'Danika Bergnaum', 'hagenes.loyal@brakus.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(46, 'Augustus Hudson', 'isabel96@rutherford.biz', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(47, 'Julien Pfannerstill', 'yschulist@rutherford.biz', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(48, 'Leland Waelchi', 'terrence.boyle@eichmann.info', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42'),
(49, 'Oren Hane', 'gturner@yahoo.com', '12121212', 'user-gen.jpg', 'member', NULL, '2017-02-27 21:25:42', '2017-02-27 21:25:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
