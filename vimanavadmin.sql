-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-03-2017 a las 17:00:49
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vimanavadmin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `status` enum('active','paused') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `articles`
--

INSERT INTO `articles` (`id`, `title`, `content`, `user_id`, `category_id`, `status`, `created_at`, `updated_at`, `slug`) VALUES
(31, 'Oootro articulo de prueba', '<p>Oootro articulo de prueba</p><p>Oootro articulo de prueba</p><p>Oootro articulo de prueba</p><p>Oootro articulo de prueba</p>', 1, 2, 'paused', '2017-02-02 14:14:20', '2017-02-02 14:14:20', 'oootro-articulo-de-pruebaoootro-articulo-de-prueba'),
(33, 'dsdsasd asd asd asd asd asd as', '<p>wqweqwewqeqweqweqweqweqweqwsdasdasdasdasdwqweqwewqeqweqweqweqweqweqwsdasdasdasdasd</p>', 1, 2, 'active', '2017-03-01 22:58:02', '2017-03-01 22:58:02', 'dsdsasd-asd-asd-asd-asd-asd-as'),
(34, 'dsdsasd asd asd asd asd asd as2', '<p>wqweqwewqeqweqweqweqweqweqwsdasdasdasdasdwqweqwewqeqweqweqweqweqweqwsdasdasdasdasd</p>', 1, 2, 'active', '2017-03-01 22:58:28', '2017-03-01 22:58:28', 'dsdsasd-asd-asd-asd-asd-asd-as2'),
(35, 'dsdsasd asd asd asd asd asd as2ds', '<p>wqweqwewqeqweqweqweqweqwdseqwsdasdasdasdasdwqweqwewqeqweqweqweqweqweqwsdasdasdasdasd</p>', 1, 2, 'active', '2017-03-01 22:59:03', '2017-03-01 22:59:03', 'dsdsasd-asd-asd-asd-asd-asd-as2ds'),
(36, 'asdasdasdasdasdasd', '<p>asdasdasd</p><p>asdasdasd</p><p>asdasdasd</p><p>asdasdasd</p><p>asdasdasd</p><p>asdasdasd</p><p>asdasdasd</p>', 1, 2, 'active', '2017-03-03 04:50:00', '2017-03-03 04:50:00', 'asdasdasdasdasdasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `article_tag`
--

CREATE TABLE `article_tag` (
  `id` int(10) UNSIGNED NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `tag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `article_tag`
--

INSERT INTO `article_tag` (`id`, `article_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(1, 33, 1, NULL, NULL),
(2, 34, 1, NULL, NULL),
(3, 35, 1, NULL, NULL),
(4, 36, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'DiseñoWeb', '2017-01-20 01:17:20', '2017-01-20 01:17:24'),
(2, 'DiseñoGrafico', '2017-01-20 01:17:32', '2017-01-20 01:17:32'),
(3, 'Logos', '2017-01-20 01:17:39', '2017-01-20 01:17:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `article_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `name`, `article_id`, `created_at`, `updated_at`) VALUES
(1, 'e3452bdfc31396f2a8693c4a5b6642b2.jpg', 35, '2017-03-02 22:34:54', '2017-03-02 22:34:54'),
(2, '95762ca75cbeb585034d2a943ff4cd28.jpg', 35, '2017-03-02 22:39:33', '2017-03-02 22:39:33'),
(3, '1c82657c6d7adf4573b0bbb8f53b4bbb.jpg', 35, '2017-03-02 22:39:38', '2017-03-02 22:39:38'),
(4, 'f3ee74eb17419ecc6cea648501b9c829.jpg', 35, '2017-03-02 22:40:34', '2017-03-02 22:40:34'),
(5, '14041d766b1d65cdfbb84ac45f6a1de5.jpg', 35, '2017-03-02 22:40:49', '2017-03-02 22:40:49'),
(6, 'a2d54ad39b7f8a62f5cddfd1947a3016.jpg', 35, '2017-03-02 22:40:50', '2017-03-02 22:40:50'),
(7, '21cc1500cf4be75818331bb26bc43719.jpg', 36, '2017-03-03 04:50:01', '2017-03-03 04:50:01');

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
(7, '2017_01_19_190731_AddSlugToArticlesTable', 2),
(8, '2017_02_11_231202_create_posts_table', 3),
(9, '2017_02_11_234431_create_testmes_table', 4),
(10, '2017_02_12_002733_create_clients_table', 5),
(11, '2017_02_12_003535_create_casos_table', 6),
(12, '2017_02_12_004311_create_casos_table', 7);

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
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE `tags` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'WebDesign', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `type` enum('user','admin','superadmin') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'javzero', 'javzero@hotmail.com', '$2y$10$gOwPzwLnHjhwPOpLSAR7AO6fsbKbDW7ajTgBITSYraDLEkjY338OW', '1488385515.jpg', 'superadmin', 'VPkiqooymWkM5Qh2vUS8XfYbKgDV8L9kZplXTYiaAeBsbNP6ChrTjSBiYAnP', '2017-01-19 07:04:46', '2017-03-01 19:25:17'),
(2, 'Viole', 'admstudiovimana@gmail.com', '$2y$10$gOwPzwLnHjhwPOpLSAR7AO6fsbKbDW7ajTgBITSYraDLEkjY338OW', '', 'admin', 'kBjqKvoCevhP5X5iyMftxAuEHlm5pmH6PC8W7gNQGuM7FbHziQudgDskGE7m', '2017-01-19 23:53:30', '2017-03-03 21:31:51'),
(44, 'rewrewr', 'erewrwrw', 'rewrwer', '', 'user', NULL, '2017-03-03 21:40:19', '2017-03-03 21:40:19'),
(45, 'dasdasdasdsdsdsd', 'dasdasdas', 'dasdasdasd', '', 'user', NULL, '2017-03-03 21:49:18', '2017-03-03 21:52:22'),
(46, 'Mr. Norval Hackett I', 'ledner.adriel@gmail.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:55', '2017-03-03 22:10:55'),
(47, 'Cleo Abshire IV', 'wpowlowski@yahoo.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(48, 'Donald Jerde', 'xavier.harber@rippin.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(49, 'Wilfred Krajcik', 'seffertz@cartwright.net', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(50, 'Dr. Jenifer Anderson', 'boris48@davis.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(51, 'Graciela Marquardt', 'ruth68@willms.info', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(52, 'Eloise Simonis', 'jackie91@gmail.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(53, 'Dr. Lorenz Mante', 'sally.zulauf@yahoo.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(54, 'Hildegard Bins', 'uauer@hotmail.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(55, 'Jammie Legros Jr.', 'owelch@gmail.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(56, 'Dr. Gabriel Hagenes', 'dondricka@johnson.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(57, 'Justen Mitchell DDS', 'moore.elian@yahoo.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(58, 'Waylon Halvorson', 'nelle.treutel@hotmail.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(59, 'Bernardo Shields DVM', 'powlowski.angel@yahoo.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(60, 'Miss Briana Lind II', 'sigurd.kub@bradtke.com', '12121212', '', 'user', NULL, '2017-03-03 22:10:56', '2017-03-03 22:10:56'),
(61, 'dsdsd', 'dsds', 'sddsd', '', 'user', NULL, '2017-03-04 00:27:59', '2017-03-04 00:27:59'),
(62, 'Prof. Cody Herzog Sr.', 'baylee.kunde@gmail.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(63, 'Marcos Boyle', 'vlabadie@gmail.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(64, 'Heidi Harvey III', 'marvin.domenick@bartell.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(65, 'Michelle Lynch', 'ralph.conroy@yahoo.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(66, 'Leanne Zulauf', 'larkin.russel@yahoo.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(67, 'Vivienne Stehr', 'bridget15@goyette.org', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(68, 'Madie Volkman', 'wunsch.stefanie@buckridge.net', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(69, 'Mariano Predovic PhD', 'sage.gutkowski@abernathy.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(70, 'Elza Grady', 'zena66@hilpert.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(71, 'Mr. Cristina Haley', 'alexandra10@gmail.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(72, 'Prof. August Eichmann PhD', 'wwiza@yahoo.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(73, 'Dr. Madie Schmeler DDS', 'gtreutel@metz.net', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(74, 'Lottie Casper', 'deanna10@koelpin.biz', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(75, 'Turner King', 'joseph83@yahoo.com', '12121212', '', 'admin', NULL, '2017-03-04 01:47:06', '2017-03-04 01:47:06'),
(76, 'Dana Mann', 'valerie.considine@franecki.net', '12121212', '', 'admin', NULL, '2017-03-04 01:47:07', '2017-03-04 01:47:07'),
(77, 'Perro', 'perro@hotmail.com', '12121212', '', 'user', NULL, '2017-03-04 03:31:17', '2017-03-04 03:31:17'),
(78, 'Jorgeeee', 'yorsh@dsdks.com', '121212', '', 'user', NULL, '2017-03-04 03:37:09', '2017-03-04 03:37:09'),
(79, 'Ceci2', 'mama@askja.colm', '232121312', '', 'admin', NULL, '2017-03-04 03:37:31', '2017-03-04 03:37:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `articles_slug_unique` (`slug`),
  ADD KEY `articles_user_id_foreign` (`user_id`),
  ADD KEY `articles_category_id_foreign` (`category_id`);

--
-- Indices de la tabla `article_tag`
--
ALTER TABLE `article_tag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_tag_article_id_foreign` (`article_id`),
  ADD KEY `article_tag_tag_id_foreign` (`tag_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_article_id_foreign` (`article_id`);

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
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT de la tabla `article_tag`
--
ALTER TABLE `article_tag`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `articles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `article_tag`
--
ALTER TABLE `article_tag`
  ADD CONSTRAINT `article_tag_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `article_tag_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_article_id_foreign` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
