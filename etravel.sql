-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 18 avr. 2023 à 10:41
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `etravel`
--

-- --------------------------------------------------------

--
-- Structure de la table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL,
  `travel_id` int(11) NOT NULL,
  `map_url` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Activities';

-- --------------------------------------------------------

--
-- Structure de la table `calendars`
--

CREATE TABLE `calendars` (
  `id` int(11) NOT NULL,
  `travel_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `activity_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Calendars';

-- --------------------------------------------------------

--
-- Structure de la table `continents`
--

CREATE TABLE `continents` (
  `code` char(2) NOT NULL COMMENT 'Continent code',
  `name` varchar(255) NOT NULL COMMENT 'Continent name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Continents';

--
-- Déchargement des données de la table `continents`
--

INSERT INTO `continents` (`code`, `name`) VALUES
('AF', 'Africa'),
('AN', 'Antarctica'),
('AS', 'Asia'),
('EU', 'Europe'),
('NA', 'North America'),
('OC', 'Oceania'),
('SA', 'South America');

-- --------------------------------------------------------

--
-- Structure de la table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `code` char(2) NOT NULL COMMENT 'Two-letter country code (ISO 3166-1 alpha-2)',
  `name` varchar(255) NOT NULL COMMENT 'English country name',
  `full_name` varchar(255) NOT NULL COMMENT 'Full English country name',
  `iso3` char(3) NOT NULL COMMENT 'Three-letter country code (ISO 3166-1 alpha-3)',
  `numeric_code` char(3) NOT NULL COMMENT 'Three-digit country number (ISO 3166-1 numeric)',
  `continent_code` char(2) NOT NULL COMMENT 'Continent code'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Countries';

--
-- Déchargement des données de la table `countries`
--

INSERT INTO `countries` (`id`, `code`, `name`, `full_name`, `iso3`, `numeric_code`, `continent_code`) VALUES
(1, 'AF', 'Afghanistan', 'Islamic Republic of Afghanistan', 'AFG', '004', 'AS'),
(2, 'AX', 'Åland Islands', 'Åland Islands', 'ALA', '248', 'EU'),
(3, 'AL', 'Albania', 'Republic of Albania', 'ALB', '008', 'EU'),
(4, 'DZ', 'Algeria', 'People\'s Democratic Republic of Algeria', 'DZA', '012', 'AF'),
(5, 'AS', 'American Samoa', 'American Samoa', 'ASM', '016', 'OC'),
(6, 'AD', 'Andorra', 'Principality of Andorra', 'AND', '020', 'EU'),
(7, 'AO', 'Angola', 'Republic of Angola', 'AGO', '024', 'AF'),
(8, 'AI', 'Anguilla', 'Anguilla', 'AIA', '660', 'NA'),
(9, 'AQ', 'Antarctica', 'Antarctica (the territory South of 60 deg S)', 'ATA', '010', 'AN'),
(10, 'AG', 'Antigua and Barbuda', 'Antigua and Barbuda', 'ATG', '028', 'NA'),
(11, 'AR', 'Argentina', 'Argentine Republic', 'ARG', '032', 'SA'),
(12, 'AM', 'Armenia', 'Republic of Armenia', 'ARM', '051', 'AS'),
(13, 'AW', 'Aruba', 'Aruba', 'ABW', '533', 'NA'),
(14, 'AU', 'Australia', 'Commonwealth of Australia', 'AUS', '036', 'OC'),
(15, 'AT', 'Austria', 'Republic of Austria', 'AUT', '040', 'EU'),
(16, 'AZ', 'Azerbaijan', 'Republic of Azerbaijan', 'AZE', '031', 'AS'),
(17, 'BS', 'Bahamas', 'Commonwealth of the Bahamas', 'BHS', '044', 'NA'),
(18, 'BH', 'Bahrain', 'Kingdom of Bahrain', 'BHR', '048', 'AS'),
(19, 'BD', 'Bangladesh', 'People\'s Republic of Bangladesh', 'BGD', '050', 'AS'),
(20, 'BB', 'Barbados', 'Barbados', 'BRB', '052', 'NA'),
(21, 'BY', 'Belarus', 'Republic of Belarus', 'BLR', '112', 'EU'),
(22, 'BE', 'Belgium', 'Kingdom of Belgium', 'BEL', '056', 'EU'),
(23, 'BZ', 'Belize', 'Belize', 'BLZ', '084', 'NA'),
(24, 'BJ', 'Benin', 'Republic of Benin', 'BEN', '204', 'AF'),
(25, 'BM', 'Bermuda', 'Bermuda', 'BMU', '060', 'NA'),
(26, 'BT', 'Bhutan', 'Kingdom of Bhutan', 'BTN', '064', 'AS'),
(27, 'BO', 'Bolivia', 'Plurinational State of Bolivia', 'BOL', '068', 'SA'),
(28, 'BQ', 'Bonaire, Sint Eustatius and Saba', 'Bonaire, Sint Eustatius and Saba', 'BES', '535', 'NA'),
(29, 'BA', 'Bosnia and Herzegovina', 'Bosnia and Herzegovina', 'BIH', '070', 'EU'),
(30, 'BW', 'Botswana', 'Republic of Botswana', 'BWA', '072', 'AF'),
(31, 'BV', 'Bouvet Island (Bouvetøya)', 'Bouvet Island (Bouvetøya)', 'BVT', '074', 'AN'),
(32, 'BR', 'Brazil', 'Federative Republic of Brazil', 'BRA', '076', 'SA'),
(33, 'IO', 'British Indian Ocean Territory (Chagos Archipelago)', 'British Indian Ocean Territory (Chagos Archipelago)', 'IOT', '086', 'AS'),
(34, 'VG', 'British Virgin Islands', 'British Virgin Islands', 'VGB', '092', 'NA'),
(35, 'BN', 'Brunei Darussalam', 'Brunei Darussalam', 'BRN', '096', 'AS'),
(36, 'BG', 'Bulgaria', 'Republic of Bulgaria', 'BGR', '100', 'EU'),
(37, 'BF', 'Burkina Faso', 'Burkina Faso', 'BFA', '854', 'AF'),
(38, 'BI', 'Burundi', 'Republic of Burundi', 'BDI', '108', 'AF'),
(39, 'KH', 'Cambodia', 'Kingdom of Cambodia', 'KHM', '116', 'AS'),
(40, 'CM', 'Cameroon', 'Republic of Cameroon', 'CMR', '120', 'AF'),
(41, 'CA', 'Canada', 'Canada', 'CAN', '124', 'NA'),
(42, 'CV', 'Cabo Verde', 'Republic of Cabo Verde', 'CPV', '132', 'AF'),
(43, 'KY', 'Cayman Islands', 'Cayman Islands', 'CYM', '136', 'NA'),
(44, 'CF', 'Central African Republic', 'Central African Republic', 'CAF', '140', 'AF'),
(45, 'TD', 'Chad', 'Republic of Chad', 'TCD', '148', 'AF'),
(46, 'CL', 'Chile', 'Republic of Chile', 'CHL', '152', 'SA'),
(47, 'CN', 'China', 'People\'s Republic of China', 'CHN', '156', 'AS'),
(48, 'CX', 'Christmas Island', 'Christmas Island', 'CXR', '162', 'AS'),
(49, 'CC', 'Cocos (Keeling) Islands', 'Cocos (Keeling) Islands', 'CCK', '166', 'AS'),
(50, 'CO', 'Colombia', 'Republic of Colombia', 'COL', '170', 'SA'),
(51, 'KM', 'Comoros', 'Union of the Comoros', 'COM', '174', 'AF'),
(52, 'CD', 'Congo', 'Democratic Republic of the Congo', 'COD', '180', 'AF'),
(53, 'CG', 'Congo', 'Republic of the Congo', 'COG', '178', 'AF'),
(54, 'CK', 'Cook Islands', 'Cook Islands', 'COK', '184', 'OC'),
(55, 'CR', 'Costa Rica', 'Republic of Costa Rica', 'CRI', '188', 'NA'),
(56, 'CI', 'Cote d\'Ivoire', 'Republic of Cote d\'Ivoire', 'CIV', '384', 'AF'),
(57, 'HR', 'Croatia', 'Republic of Croatia', 'HRV', '191', 'EU'),
(58, 'CU', 'Cuba', 'Republic of Cuba', 'CUB', '192', 'NA'),
(59, 'CW', 'Curaçao', 'Curaçao', 'CUW', '531', 'NA'),
(60, 'CY', 'Cyprus', 'Republic of Cyprus', 'CYP', '196', 'AS'),
(61, 'CZ', 'Czechia', 'Czech Republic', 'CZE', '203', 'EU'),
(62, 'DK', 'Denmark', 'Kingdom of Denmark', 'DNK', '208', 'EU'),
(63, 'DJ', 'Djibouti', 'Republic of Djibouti', 'DJI', '262', 'AF'),
(64, 'DM', 'Dominica', 'Commonwealth of Dominica', 'DMA', '212', 'NA'),
(65, 'DO', 'Dominican Republic', 'Dominican Republic', 'DOM', '214', 'NA'),
(66, 'EC', 'Ecuador', 'Republic of Ecuador', 'ECU', '218', 'SA'),
(67, 'EG', 'Egypt', 'Arab Republic of Egypt', 'EGY', '818', 'AF'),
(68, 'SV', 'El Salvador', 'Republic of El Salvador', 'SLV', '222', 'NA'),
(69, 'GQ', 'Equatorial Guinea', 'Republic of Equatorial Guinea', 'GNQ', '226', 'AF'),
(70, 'ER', 'Eritrea', 'State of Eritrea', 'ERI', '232', 'AF'),
(71, 'EE', 'Estonia', 'Republic of Estonia', 'EST', '233', 'EU'),
(72, 'ET', 'Ethiopia', 'Federal Democratic Republic of Ethiopia', 'ETH', '231', 'AF'),
(73, 'FO', 'Faroe Islands', 'Faroe Islands', 'FRO', '234', 'EU'),
(74, 'FK', 'Falkland Islands (Malvinas)', 'Falkland Islands (Malvinas)', 'FLK', '238', 'SA'),
(75, 'FJ', 'Fiji', 'Republic of Fiji', 'FJI', '242', 'OC'),
(76, 'FI', 'Finland', 'Republic of Finland', 'FIN', '246', 'EU'),
(77, 'FR', 'France', 'French Republic', 'FRA', '250', 'EU'),
(78, 'GF', 'French Guiana', 'French Guiana', 'GUF', '254', 'SA'),
(79, 'PF', 'French Polynesia', 'French Polynesia', 'PYF', '258', 'OC'),
(80, 'TF', 'French Southern Territories', 'French Southern Territories', 'ATF', '260', 'AN'),
(81, 'GA', 'Gabon', 'Gabonese Republic', 'GAB', '266', 'AF'),
(82, 'GM', 'Gambia', 'Republic of the Gambia', 'GMB', '270', 'AF'),
(83, 'GE', 'Georgia', 'Georgia', 'GEO', '268', 'AS'),
(84, 'DE', 'Germany', 'Federal Republic of Germany', 'DEU', '276', 'EU'),
(85, 'GH', 'Ghana', 'Republic of Ghana', 'GHA', '288', 'AF'),
(86, 'GI', 'Gibraltar', 'Gibraltar', 'GIB', '292', 'EU'),
(87, 'GR', 'Greece', 'Hellenic Republic of Greece', 'GRC', '300', 'EU'),
(88, 'GL', 'Greenland', 'Greenland', 'GRL', '304', 'NA'),
(89, 'GD', 'Grenada', 'Grenada', 'GRD', '308', 'NA'),
(90, 'GP', 'Guadeloupe', 'Guadeloupe', 'GLP', '312', 'NA'),
(91, 'GU', 'Guam', 'Guam', 'GUM', '316', 'OC'),
(92, 'GT', 'Guatemala', 'Republic of Guatemala', 'GTM', '320', 'NA'),
(93, 'GG', 'Guernsey', 'Bailiwick of Guernsey', 'GGY', '831', 'EU'),
(94, 'GN', 'Guinea', 'Republic of Guinea', 'GIN', '324', 'AF'),
(95, 'GW', 'Guinea-Bissau', 'Republic of Guinea-Bissau', 'GNB', '624', 'AF'),
(96, 'GY', 'Guyana', 'Co-operative Republic of Guyana', 'GUY', '328', 'SA'),
(97, 'HT', 'Haiti', 'Republic of Haiti', 'HTI', '332', 'NA'),
(98, 'HM', 'Heard Island and McDonald Islands', 'Heard Island and McDonald Islands', 'HMD', '334', 'AN'),
(99, 'VA', 'Holy See (Vatican City State)', 'Holy See (Vatican City State)', 'VAT', '336', 'EU'),
(100, 'HN', 'Honduras', 'Republic of Honduras', 'HND', '340', 'NA'),
(101, 'HK', 'Hong Kong', 'Hong Kong Special Administrative Region of China', 'HKG', '344', 'AS'),
(102, 'HU', 'Hungary', 'Hungary', 'HUN', '348', 'EU'),
(103, 'IS', 'Iceland', 'Iceland', 'ISL', '352', 'EU'),
(104, 'IN', 'India', 'Republic of India', 'IND', '356', 'AS'),
(105, 'ID', 'Indonesia', 'Republic of Indonesia', 'IDN', '360', 'AS'),
(106, 'IR', 'Iran', 'Islamic Republic of Iran', 'IRN', '364', 'AS'),
(107, 'IQ', 'Iraq', 'Republic of Iraq', 'IRQ', '368', 'AS'),
(108, 'IE', 'Ireland', 'Ireland', 'IRL', '372', 'EU'),
(109, 'IM', 'Isle of Man', 'Isle of Man', 'IMN', '833', 'EU'),
(110, 'IL', 'Israel', 'State of Israel', 'ISR', '376', 'AS'),
(111, 'IT', 'Italy', 'Republic of Italy', 'ITA', '380', 'EU'),
(112, 'JM', 'Jamaica', 'Jamaica', 'JAM', '388', 'NA'),
(113, 'JP', 'Japan', 'Japan', 'JPN', '392', 'AS'),
(114, 'JE', 'Jersey', 'Bailiwick of Jersey', 'JEY', '832', 'EU'),
(115, 'JO', 'Jordan', 'Hashemite Kingdom of Jordan', 'JOR', '400', 'AS'),
(116, 'KZ', 'Kazakhstan', 'Republic of Kazakhstan', 'KAZ', '398', 'AS'),
(117, 'KE', 'Kenya', 'Republic of Kenya', 'KEN', '404', 'AF'),
(118, 'KI', 'Kiribati', 'Republic of Kiribati', 'KIR', '296', 'OC'),
(119, 'KP', 'Korea', 'Democratic People\'s Republic of Korea', 'PRK', '408', 'AS'),
(120, 'KR', 'Korea', 'Republic of Korea', 'KOR', '410', 'AS'),
(121, 'KW', 'Kuwait', 'State of Kuwait', 'KWT', '414', 'AS'),
(122, 'KG', 'Kyrgyz Republic', 'Kyrgyz Republic', 'KGZ', '417', 'AS'),
(123, 'LA', 'Lao People\'s Democratic Republic', 'Lao People\'s Democratic Republic', 'LAO', '418', 'AS'),
(124, 'LV', 'Latvia', 'Republic of Latvia', 'LVA', '428', 'EU'),
(125, 'LB', 'Lebanon', 'Lebanese Republic', 'LBN', '422', 'AS'),
(126, 'LS', 'Lesotho', 'Kingdom of Lesotho', 'LSO', '426', 'AF'),
(127, 'LR', 'Liberia', 'Republic of Liberia', 'LBR', '430', 'AF'),
(128, 'LY', 'Libya', 'State of Libya', 'LBY', '434', 'AF'),
(129, 'LI', 'Liechtenstein', 'Principality of Liechtenstein', 'LIE', '438', 'EU'),
(130, 'LT', 'Lithuania', 'Republic of Lithuania', 'LTU', '440', 'EU'),
(131, 'LU', 'Luxembourg', 'Grand Duchy of Luxembourg', 'LUX', '442', 'EU'),
(132, 'MO', 'Macao', 'Macao Special Administrative Region of China', 'MAC', '446', 'AS'),
(133, 'MG', 'Madagascar', 'Republic of Madagascar', 'MDG', '450', 'AF'),
(134, 'MW', 'Malawi', 'Republic of Malawi', 'MWI', '454', 'AF'),
(135, 'MY', 'Malaysia', 'Malaysia', 'MYS', '458', 'AS'),
(136, 'MV', 'Maldives', 'Republic of Maldives', 'MDV', '462', 'AS'),
(137, 'ML', 'Mali', 'Republic of Mali', 'MLI', '466', 'AF'),
(138, 'MT', 'Malta', 'Republic of Malta', 'MLT', '470', 'EU'),
(139, 'MH', 'Marshall Islands', 'Republic of the Marshall Islands', 'MHL', '584', 'OC'),
(140, 'MQ', 'Martinique', 'Martinique', 'MTQ', '474', 'NA'),
(141, 'MR', 'Mauritania', 'Islamic Republic of Mauritania', 'MRT', '478', 'AF'),
(142, 'MU', 'Mauritius', 'Republic of Mauritius', 'MUS', '480', 'AF'),
(143, 'YT', 'Mayotte', 'Mayotte', 'MYT', '175', 'AF'),
(144, 'MX', 'Mexico', 'United Mexican States', 'MEX', '484', 'NA'),
(145, 'FM', 'Micronesia', 'Federated States of Micronesia', 'FSM', '583', 'OC'),
(146, 'MD', 'Moldova', 'Republic of Moldova', 'MDA', '498', 'EU'),
(147, 'MC', 'Monaco', 'Principality of Monaco', 'MCO', '492', 'EU'),
(148, 'MN', 'Mongolia', 'Mongolia', 'MNG', '496', 'AS'),
(149, 'ME', 'Montenegro', 'Montenegro', 'MNE', '499', 'EU'),
(150, 'MS', 'Montserrat', 'Montserrat', 'MSR', '500', 'NA'),
(151, 'MA', 'Morocco', 'Kingdom of Morocco', 'MAR', '504', 'AF'),
(152, 'MZ', 'Mozambique', 'Republic of Mozambique', 'MOZ', '508', 'AF'),
(153, 'MM', 'Myanmar', 'Republic of the Union of Myanmar', 'MMR', '104', 'AS'),
(154, 'NA', 'Namibia', 'Republic of Namibia', 'NAM', '516', 'AF'),
(155, 'NR', 'Nauru', 'Republic of Nauru', 'NRU', '520', 'OC'),
(156, 'NP', 'Nepal', 'Nepal', 'NPL', '524', 'AS'),
(157, 'NL', 'Netherlands', 'Kingdom of the Netherlands', 'NLD', '528', 'EU'),
(158, 'NC', 'New Caledonia', 'New Caledonia', 'NCL', '540', 'OC'),
(159, 'NZ', 'New Zealand', 'New Zealand', 'NZL', '554', 'OC'),
(160, 'NI', 'Nicaragua', 'Republic of Nicaragua', 'NIC', '558', 'NA'),
(161, 'NE', 'Niger', 'Republic of Niger', 'NER', '562', 'AF'),
(162, 'NG', 'Nigeria', 'Federal Republic of Nigeria', 'NGA', '566', 'AF'),
(163, 'NU', 'Niue', 'Niue', 'NIU', '570', 'OC'),
(164, 'NF', 'Norfolk Island', 'Norfolk Island', 'NFK', '574', 'OC'),
(165, 'MK', 'North Macedonia', 'Republic of North Macedonia', 'MKD', '807', 'EU'),
(166, 'MP', 'Northern Mariana Islands', 'Commonwealth of the Northern Mariana Islands', 'MNP', '580', 'OC'),
(167, 'NO', 'Norway', 'Kingdom of Norway', 'NOR', '578', 'EU'),
(168, 'OM', 'Oman', 'Sultanate of Oman', 'OMN', '512', 'AS'),
(169, 'PK', 'Pakistan', 'Islamic Republic of Pakistan', 'PAK', '586', 'AS'),
(170, 'PW', 'Palau', 'Republic of Palau', 'PLW', '585', 'OC'),
(171, 'PS', 'Palestine', 'State of Palestine', 'PSE', '275', 'AS'),
(172, 'PA', 'Panama', 'Republic of Panama', 'PAN', '591', 'NA'),
(173, 'PG', 'Papua New Guinea', 'Independent State of Papua New Guinea', 'PNG', '598', 'OC'),
(174, 'PY', 'Paraguay', 'Republic of Paraguay', 'PRY', '600', 'SA'),
(175, 'PE', 'Peru', 'Republic of Peru', 'PER', '604', 'SA'),
(176, 'PH', 'Philippines', 'Republic of the Philippines', 'PHL', '608', 'AS'),
(177, 'PN', 'Pitcairn Islands', 'Pitcairn Islands', 'PCN', '612', 'OC'),
(178, 'PL', 'Poland', 'Republic of Poland', 'POL', '616', 'EU'),
(179, 'PT', 'Portugal', 'Portuguese Republic', 'PRT', '620', 'EU'),
(180, 'PR', 'Puerto Rico', 'Commonwealth of Puerto Rico', 'PRI', '630', 'NA'),
(181, 'QA', 'Qatar', 'State of Qatar', 'QAT', '634', 'AS'),
(182, 'RE', 'Réunion', 'Réunion', 'REU', '638', 'AF'),
(183, 'RO', 'Romania', 'Romania', 'ROU', '642', 'EU'),
(184, 'RU', 'Russian Federation', 'Russian Federation', 'RUS', '643', 'EU'),
(185, 'RW', 'Rwanda', 'Republic of Rwanda', 'RWA', '646', 'AF'),
(186, 'BL', 'Saint Barthélemy', 'Saint Barthélemy', 'BLM', '652', 'NA'),
(187, 'SH', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Helena, Ascension and Tristan da Cunha', 'SHN', '654', 'AF'),
(188, 'KN', 'Saint Kitts and Nevis', 'Federation of Saint Kitts and Nevis', 'KNA', '659', 'NA'),
(189, 'LC', 'Saint Lucia', 'Saint Lucia', 'LCA', '662', 'NA'),
(190, 'MF', 'Saint Martin', 'Saint Martin (French part)', 'MAF', '663', 'NA'),
(191, 'PM', 'Saint Pierre and Miquelon', 'Saint Pierre and Miquelon', 'SPM', '666', 'NA'),
(192, 'VC', 'Saint Vincent and the Grenadines', 'Saint Vincent and the Grenadines', 'VCT', '670', 'NA'),
(193, 'WS', 'Samoa', 'Independent State of Samoa', 'WSM', '882', 'OC'),
(194, 'SM', 'San Marino', 'Republic of San Marino', 'SMR', '674', 'EU'),
(195, 'ST', 'Sao Tome and Principe', 'Democratic Republic of Sao Tome and Principe', 'STP', '678', 'AF'),
(196, 'SA', 'Saudi Arabia', 'Kingdom of Saudi Arabia', 'SAU', '682', 'AS'),
(197, 'SN', 'Senegal', 'Republic of Senegal', 'SEN', '686', 'AF'),
(198, 'RS', 'Serbia', 'Republic of Serbia', 'SRB', '688', 'EU'),
(199, 'SC', 'Seychelles', 'Republic of Seychelles', 'SYC', '690', 'AF'),
(200, 'SL', 'Sierra Leone', 'Republic of Sierra Leone', 'SLE', '694', 'AF'),
(201, 'SG', 'Singapore', 'Republic of Singapore', 'SGP', '702', 'AS'),
(202, 'SX', 'Sint Maarten (Dutch part)', 'Sint Maarten (Dutch part)', 'SXM', '534', 'NA'),
(203, 'SK', 'Slovakia (Slovak Republic)', 'Slovakia (Slovak Republic)', 'SVK', '703', 'EU'),
(204, 'SI', 'Slovenia', 'Republic of Slovenia', 'SVN', '705', 'EU'),
(205, 'SB', 'Solomon Islands', 'Solomon Islands', 'SLB', '090', 'OC'),
(206, 'SO', 'Somalia', 'Federal Republic of Somalia', 'SOM', '706', 'AF'),
(207, 'ZA', 'South Africa', 'Republic of South Africa', 'ZAF', '710', 'AF'),
(208, 'GS', 'South Georgia and the South Sandwich Islands', 'South Georgia and the South Sandwich Islands', 'SGS', '239', 'AN'),
(209, 'SS', 'South Sudan', 'Republic of South Sudan', 'SSD', '728', 'AF'),
(210, 'ES', 'Spain', 'Kingdom of Spain', 'ESP', '724', 'EU'),
(211, 'LK', 'Sri Lanka', 'Democratic Socialist Republic of Sri Lanka', 'LKA', '144', 'AS'),
(212, 'SD', 'Sudan', 'Republic of Sudan', 'SDN', '729', 'AF'),
(213, 'SR', 'Suriname', 'Republic of Suriname', 'SUR', '740', 'SA'),
(214, 'SJ', 'Svalbard & Jan Mayen Islands', 'Svalbard & Jan Mayen Islands', 'SJM', '744', 'EU'),
(215, 'SZ', 'Eswatini', 'Kingdom of Eswatini', 'SWZ', '748', 'AF'),
(216, 'SE', 'Sweden', 'Kingdom of Sweden', 'SWE', '752', 'EU'),
(217, 'CH', 'Switzerland', 'Swiss Confederation', 'CHE', '756', 'EU'),
(218, 'SY', 'Syrian Arab Republic', 'Syrian Arab Republic', 'SYR', '760', 'AS'),
(219, 'TW', 'Taiwan', 'Taiwan, Province of China', 'TWN', '158', 'AS'),
(220, 'TJ', 'Tajikistan', 'Republic of Tajikistan', 'TJK', '762', 'AS'),
(221, 'TZ', 'Tanzania', 'United Republic of Tanzania', 'TZA', '834', 'AF'),
(222, 'TH', 'Thailand', 'Kingdom of Thailand', 'THA', '764', 'AS'),
(223, 'TL', 'Timor-Leste', 'Democratic Republic of Timor-Leste', 'TLS', '626', 'AS'),
(224, 'TG', 'Togo', 'Togolese Republic', 'TGO', '768', 'AF'),
(225, 'TK', 'Tokelau', 'Tokelau', 'TKL', '772', 'OC'),
(226, 'TO', 'Tonga', 'Kingdom of Tonga', 'TON', '776', 'OC'),
(227, 'TT', 'Trinidad and Tobago', 'Republic of Trinidad and Tobago', 'TTO', '780', 'NA'),
(228, 'TN', 'Tunisia', 'Tunisian Republic', 'TUN', '788', 'AF'),
(229, 'TR', 'Türkiye', 'Republic of Türkiye', 'TUR', '792', 'AS'),
(230, 'TM', 'Turkmenistan', 'Turkmenistan', 'TKM', '795', 'AS'),
(231, 'TC', 'Turks and Caicos Islands', 'Turks and Caicos Islands', 'TCA', '796', 'NA'),
(232, 'TV', 'Tuvalu', 'Tuvalu', 'TUV', '798', 'OC'),
(233, 'UG', 'Uganda', 'Republic of Uganda', 'UGA', '800', 'AF'),
(234, 'UA', 'Ukraine', 'Ukraine', 'UKR', '804', 'EU'),
(235, 'AE', 'United Arab Emirates', 'United Arab Emirates', 'ARE', '784', 'AS'),
(236, 'GB', 'United Kingdom of Great Britain and Northern Ireland', 'United Kingdom of Great Britain & Northern Ireland', 'GBR', '826', 'EU'),
(237, 'US', 'United States of America', 'United States of America', 'USA', '840', 'NA'),
(238, 'UM', 'United States Minor Outlying Islands', 'United States Minor Outlying Islands', 'UMI', '581', 'OC'),
(239, 'VI', 'United States Virgin Islands', 'United States Virgin Islands', 'VIR', '850', 'NA'),
(240, 'UY', 'Uruguay', 'Eastern Republic of Uruguay', 'URY', '858', 'SA'),
(241, 'UZ', 'Uzbekistan', 'Republic of Uzbekistan', 'UZB', '860', 'AS'),
(242, 'VU', 'Vanuatu', 'Republic of Vanuatu', 'VUT', '548', 'OC'),
(243, 'VE', 'Venezuela', 'Bolivarian Republic of Venezuela', 'VEN', '862', 'SA'),
(244, 'VN', 'Vietnam', 'Socialist Republic of Vietnam', 'VNM', '704', 'AS'),
(245, 'WF', 'Wallis and Futuna', 'Wallis and Futuna', 'WLF', '876', 'OC'),
(246, 'EH', 'Western Sahara', 'Western Sahara', 'ESH', '732', 'AF'),
(247, 'YE', 'Yemen', 'Yemen', 'YEM', '887', 'AS'),
(248, 'ZM', 'Zambia', 'Republic of Zambia', 'ZMB', '894', 'AF'),
(249, 'ZW', 'Zimbabwe', 'Republic of Zimbabwe', 'ZWE', '716', 'AF');

-- --------------------------------------------------------

--
-- Structure de la table `destinations`
--

CREATE TABLE `destinations` (
  `id` int(11) NOT NULL,
  `travel_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Destinations';

-- --------------------------------------------------------

--
-- Structure de la table `lodgings`
--

CREATE TABLE `lodgings` (
  `id` int(11) NOT NULL,
  `travel_id` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Lodgings';

-- --------------------------------------------------------

--
-- Structure de la table `travels`
--

CREATE TABLE `travels` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Travels';

-- --------------------------------------------------------

--
-- Structure de la table `type_activities`
--

CREATE TABLE `type_activities` (
  `id` int(11) NOT NULL,
  `label` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Type of Activities';

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `birthdate` date NOT NULL,
  `country_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zip_code` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `key_api` varchar(100) NOT NULL,
  `role` enum('User','Admin','Super Admin') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Users';

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_id` (`type_id`),
  ADD KEY `travel_id` (`travel_id`);

--
-- Index pour la table `calendars`
--
ALTER TABLE `calendars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `travel_id` (`travel_id`),
  ADD KEY `activity_id` (`activity_id`);

--
-- Index pour la table `continents`
--
ALTER TABLE `continents`
  ADD PRIMARY KEY (`code`);

--
-- Index pour la table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `continent_code` (`continent_code`);

--
-- Index pour la table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `travel_id` (`travel_id`),
  ADD KEY `country_id` (`country_id`);

--
-- Index pour la table `lodgings`
--
ALTER TABLE `lodgings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `travel_id` (`travel_id`);

--
-- Index pour la table `travels`
--
ALTER TABLE `travels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index pour la table `type_activities`
--
ALTER TABLE `type_activities`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `country_id` (`country_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `calendars`
--
ALTER TABLE `calendars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT pour la table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `lodgings`
--
ALTER TABLE `lodgings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `travels`
--
ALTER TABLE `travels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `type_activities`
--
ALTER TABLE `type_activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `type_activities` (`id`),
  ADD CONSTRAINT `activities_ibfk_2` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `calendars`
--
ALTER TABLE `calendars`
  ADD CONSTRAINT `calendars_ibfk_1` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `calendars_ibfk_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`);

--
-- Contraintes pour la table `countries`
--
ALTER TABLE `countries`
  ADD CONSTRAINT `countries_ibfk_1` FOREIGN KEY (`continent_code`) REFERENCES `continents` (`code`),
  ADD CONSTRAINT `countries_ibfk_2` FOREIGN KEY (`continent_code`) REFERENCES `continents` (`code`);

--
-- Contraintes pour la table `destinations`
--
ALTER TABLE `destinations`
  ADD CONSTRAINT `destinations_ibfk_1` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `destinations_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

--
-- Contraintes pour la table `lodgings`
--
ALTER TABLE `lodgings`
  ADD CONSTRAINT `lodgings_ibfk_1` FOREIGN KEY (`travel_id`) REFERENCES `travels` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `travels`
--
ALTER TABLE `travels`
  ADD CONSTRAINT `travels_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
