

CREATE TABLE `requisicao_material` (
  `id` int(11) NOT NULL,
  `id_user_register` int(11) DEFAULT NULL,
  `dth_sist` varchar(30) DEFAULT NULL,
  `servidor` varchar(100) DEFAULT NULL,
  `matricula` varchar(20) DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `posto` varchar(50) DEFAULT NULL,
  `inspetoria` varchar(50) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `dt_solicitacao` varchar(20) DEFAULT NULL,
  `id_assServidor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



***************


CREATE TABLE `solicitacao_uniforme` (
  `id` int(11) NOT NULL,
  `id_user_register` int(11) DEFAULT NULL,
  `dth_sist` varchar(30) DEFAULT NULL,
  `servidor` varchar(100) DEFAULT NULL,
  `matricula` varchar(20) DEFAULT NULL,
  `placa` varchar(10) DEFAULT NULL,
  `uniforme_um` varchar(50) DEFAULT NULL,
  `tamanho_unifUm` varchar(10) DEFAULT NULL,
  `uniforme_dois` varchar(50) DEFAULT NULL,
  `tamanho_unifDois` varchar(10) DEFAULT NULL,
  `uniforme_tres` varchar(50) DEFAULT NULL,
  `tamanho_unifTres` varchar(10) DEFAULT NULL,
  `uniforme_quatro` varchar(50) DEFAULT NULL,
  `tamanho_unifQuatro` varchar(10) DEFAULT NULL,
  `calcado` varchar(50) DEFAULT NULL,
  `tam_calcado` varchar(10) DEFAULT NULL,
  `cobertura` varchar(50) DEFAULT NULL,
  `tam_cobertura` varchar(10) DEFAULT NULL,
  `fiel` varchar(10) DEFAULT NULL,
  `cinto_nylon` varchar(10) DEFAULT NULL,
  `cinto_guarnicao` varchar(10) DEFAULT NULL,
  `capa_colete` varchar(10) DEFAULT NULL,
  `coldre` varchar(10) DEFAULT NULL,
  `porta_algema` varchar(10) DEFAULT NULL,
  `porta_tonfa` varchar(10) DEFAULT NULL,
  `meia_social` varchar(10) DEFAULT NULL,
  `distintivo_deQuepe` varchar(10) DEFAULT NULL,
  `distintivo_boina_casquete` varchar(10) DEFAULT NULL,
  `placa_peito` varchar(10) DEFAULT NULL,
  `brasao_bordado_par` varchar(10) DEFAULT NULL,
  `luva` varchar(10) DEFAULT NULL,
  `armadura` varchar(10) DEFAULT NULL,
  `cotoveleira` varchar(10) DEFAULT NULL,
  `joelheira` varchar(10) DEFAULT NULL,
  `protetor_canela` varchar(10) DEFAULT NULL,
  `dt_requerimento` varchar(20) DEFAULT NULL,
  `id_assServidor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;