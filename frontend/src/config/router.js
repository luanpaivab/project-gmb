import Vue from 'vue'
import VueRouter from 'vue-router'

import Teste from '@/components/teste_ibagens/Imgs'
// ---------------HOMEPAGES----------------------
import Home from '@/components/home/Home'
import HomeSeguranca from '@/components/home/HomeSeguranca'
import HomeDen from '@/components/home/HomeDen'
import HomeProcessos from '@/components/home/HomeProcessos'
import HomeTransporte from '@/components/home/HomeTransporte'
import HomeAlmoxarifado from '@/components/home/HomeAlmoxarifado'
import HomePlanejamento from '@/components/home/HomePlanejamento'

// ---------------RO -> DOP ----------------------
import AdminPages from '@/components/admin/AdminPages'
import RosByCategory from '@/components/ro/RosByCategory'
import RoById from '@/components/ro/RoById'
import UserById from '@/components/user/UserById'
import UsersGbel from '@/components/user/UsersGbel'
import AutoDeApreensao from '../components/relatorios/autoApreensao/AutoDeApreensao'
import AutoDeApreensaoId from '../components/relatorios/autoApreensao/AutoDeApreensaoId'
import AutoDeEntrega from '../components/relatorios/autoEntrega/AutoDeEntrega'
import AutoDeEntregaId from '../components/relatorios/autoEntrega/AutoDeEntregaId'
import RelatorioAlgemacao from '../components/relatorios/algemacao/RelatorioAlgemacao'
import RelatorioAlgemacaoId from '../components/relatorios/algemacao/RelatorioAlgemacaoId'
import RelatorioDisparo from '../components/relatorios/disparo/RelatorioDisparo'
import RelatorioDisparoId from '../components/relatorios/disparo/RelatorioDisparoId'
import RelatorioMissao from '../components/relatorios/relatorioMissao/RelatorioMissao'
import RelatorioMissaoId from '../components/relatorios/relatorioMissao/RelatorioMissaoId'
import ComunicadoInterno from '../components/relatorios/comunicadoInterno/ComunicadoInterno'
import ComunicadoInternoId from '../components/relatorios/comunicadoInterno/ComunicadoInternoId'
import FormularioFerias from '../components/relatorios/ferias/FormularioFerias'
import FormularioFeriasId from '../components/relatorios/ferias/FormularioFeriasId'
import TrocaServico from '@/components/relatorios/processosInternos/TrocaServico'
import TrocaServicoId from '@/components/relatorios/processosInternos/TrocaServicoId'
import TrocaHorario from '@/components/relatorios/processosInternos/TrocaHorario'
import TrocaHorarioId from '@/components/relatorios/processosInternos/TrocaHorarioId'
import TrocaTurno from '@/components/relatorios/processosInternos/TrocaTurno'
import TrocaTurnoId from '@/components/relatorios/processosInternos/TrocaTurnoId'
import AbonoFalta from '@/components/relatorios/processosInternos/AbonoFalta'
import AbonoFaltaId from '@/components/relatorios/processosInternos/AbonoFaltaId'
import OutrasSolicitacoes from '@/components/relatorios/processosInternos/OutrasSolicitacoes'
import OutrasSolicitacoesId from '@/components/relatorios/processosInternos/OutrasSolicitacoesId'
import PlantaoRemunerado from '@/components/relatorios/remunerados/PlantaoRemunerado'
import PlantaoRemuneradoId from '@/components/relatorios/remunerados/PlantaoRemuneradoId'

// ---------------SIM----------------------
import Sim from '../components/sim/Sim'
import SimId from '../components/sim/SimId'

// ---------------TRANSPORTE----------------------
import ChecklistVtr from '../components/transporte/checklists/ChecklistVtr'
import ChecklistVtrId from '../components/transporte/checklists/ChecklistVtrId'
import ChecklistMoto from '../components/transporte/checklists/ChecklistMoto'
import ChecklistMotoId from '../components/transporte/checklists/ChecklistMotoId'

// ---------------DEN----------------------
import FichaFuncional from '@/components/den/FichaFuncional'
import FichaFuncionalId from '@/components/den/FichaFuncionalId'
import RelatorioUsers from '@/components/den/RelatorioUsers'

// ---------------ALMOXARIFADO----------------------
import Uniforme from '@/components/almoxarifado/Uniforme'
import UniformeId from '@/components/almoxarifado/UniformeId'
import Materiais from '@/components/almoxarifado/Materiais'
import MateriaisId from '@/components/almoxarifado/MateriaisId'
import Estoque from '@/components/almoxarifado/Estoque'

// ---------------CONFIGURAÇÕES----------------------
import Auth from '@/components/auth/Auth'
import Grafico from '@/components/graficos/Grafico1'
import Perfil from '@/components/perfil/Perfil'
import ConfiguracoesUser from '@/components/perfil/ConfiguracoesUser'

// ---------------SEGURANÇA UNIDA----------------------
import VeiculosRoubados from '../components/seguranca/VeiculosRoubados'
import VeiculosRoubadosId from '../components/seguranca/VeiculosRoubadosId'
import RoubosFurtos from '../components/seguranca/RoubosFurtos'
import RoubosFurtosId from '../components/seguranca/RoubosFurtosId'
import RouboDeResidencia from '../components/seguranca/RouboDeResidencia'
import RouboDeResidenciaId from '../components/seguranca/RouboDeResidenciaId'
import DescarteIrregular from '../components/seguranca/DescarteIrregular'
import DescarteIrregularId from '../components/seguranca/DescarteIrregularId'
import AcidenteDeTransito from '../components/seguranca/AcidenteDeTransito'
import AcidenteDeTransitoId from '../components/seguranca/AcidenteDeTransitoId'
import DenunciaIncendio from '../components/seguranca/DenunciaIncendio'
import DenunciaIncendioId from '../components/seguranca/DenunciaIncendioId'
import SosMulher from '../components/seguranca/SosMulher'
import SosMulherId from '../components/seguranca/SosMulherId'
import SosIdoso from '../components/seguranca/SosIdoso'
import SosIdosoId from '../components/seguranca/SosIdosoId'
import SosMenores from '../components/seguranca/SosMenores'
import SosMenoresId from '../components/seguranca/SosMenoresId'
import DenunciaVandalismo from '../components/seguranca/DenunciaVandalismo'
import DenunciaVandalismoId from '../components/seguranca/DenunciaVandalismoId'
import DenunciaTrafico from '../components/seguranca/DenunciaTrafico'
import DenunciaTraficoId from '../components/seguranca/DenunciaTraficoId'


import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'teste',
    path: '/teste',
    component: Teste
}, {
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'homeSeguranca',
    path: '/homeseguranca',
    component: HomeSeguranca
}, {
    name: 'homeDen',
    path: '/homeden',
    component: HomeDen
}, {
    name: 'grafico',
    path: '/grafico',
    component: Grafico
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
},{
    name: 'perfil',
    path: '/perfil/:id',
    component: Perfil
},{
    name: 'configuracoes',
    path: '/configuracoes/:id',
    component: ConfiguracoesUser
},{
    name: 'homeProcessos',
    path: '/homeprocessos',
    component: HomeProcessos
},{
    name: 'homeTransporte',
    path: '/hometransporte',
    component: HomeTransporte
},{
    name: 'homeAlmoxarifado',
    path: '/homealmoxarifado',
    component: HomeAlmoxarifado
},{
    name: 'homePlanejamento',
    path: '/planejamento',
    component: HomePlanejamento
},

/*-------------RO -> DOP------------------- */

{
    name: 'userById',
    path: '/users/:id',
    component: UserById
}, {
    name: 'usersGbel',
    path: '/users',
    component: UsersGbel
}, {
    name: 'relatorioUsers',
    path: '/relatorio',
    component: RelatorioUsers
}, {
    name: 'rosByCategory',
    path: '/ros',
    component: RosByCategory
}, {
    name: 'autoDeEntrega',
    path: '/autodeentrega',
    component: AutoDeEntrega
},{
    name: 'autoDeEntregaId',
    path: '/autodeentrega/:id',
    component: AutoDeEntregaId
},{
    name: 'autoDeApreensao',
    path: '/autodeapreensao',
    component: AutoDeApreensao
},{
    name: 'autoDeApreensaoId',
    path: '/autodeapreensao/:id',
    component: AutoDeApreensaoId
},{
    name: 'roById',
    path: '/ros/:id',
    component: RoById
},{
    name: 'relatorioDisparo',
    path: '/relatoriodisparo',
    component: RelatorioDisparo
},{
    name: 'relatorioDisparoId',
    path: '/relatoriodisparo/:id',
    component: RelatorioDisparoId
},{
    name: 'relatorioAlgemacao',
    path: '/relatorioalgemacao',
    component: RelatorioAlgemacao
},{
    name: 'relatorioAlgemacaoId',
    path: '/relatorioalgemacao/:id',
    component: RelatorioAlgemacaoId
},{
    name: 'relatorioMissao',
    path: '/relatoriomissao',
    component: RelatorioMissao
},{
    name: 'relatorioMissaoId',
    path: '/relatoriomissao/:id',
    component: RelatorioMissaoId
},{
    name: 'comunicadoInterno',
    path: '/comunicadointerno',
    component: ComunicadoInterno
},{
    name: 'comunicadoInternoId',
    path: '/comunicadointerno/:id',
    component: ComunicadoInternoId
},{
    name: 'formularioFerias',
    path: '/formularioferias',
    component: FormularioFerias
},{
    name: 'formularioFeriasId',
    path: '/formularioferias/:id',
    component: FormularioFeriasId
},{
    name: 'trocaServico',
    path: '/trocaservico',
    component: TrocaServico
},{
    name: 'trocaServicoId',
    path: '/trocaservico/:id',
    component: TrocaServicoId
},{
    name: 'trocaHorario',
    path: '/trocahorario',
    component: TrocaHorario
},{
    name: 'trocaHorarioId',
    path: '/trocahorario/:id',
    component: TrocaHorarioId
},{
    name: 'trocaTurno',
    path: '/trocaturno',
    component: TrocaTurno
},{
    name: 'trocaTurnoId',
    path: '/trocaturno/:id',
    component: TrocaTurnoId
},{
    name: 'abonoFalta',
    path: '/abonofalta',
    component: AbonoFalta
},{
    name: 'abonoFaltaId',
    path: '/abonofalta/:id',
    component: AbonoFaltaId
},{
    name: 'outrasSolicitacoes',
    path: '/outrassolicitacoes',
    component: OutrasSolicitacoes
},{
    name: 'outrasSolicitacoesId',
    path: '/outrassolicitacoes/:id',
    component: OutrasSolicitacoesId
},{
    name: 'remunerados',
    path: '/remunerados',
    component: PlantaoRemunerado
},{
    name: 'remuneradosId',
    path: '/remunerados/:id',
    component: PlantaoRemuneradoId
},

/*-------------SIM------------------ */
{
    name: 'sim',
    path: '/sim',
    component: Sim
},{
    name: 'simId',
    path: '/sim/:id',
    component: SimId
},


/*-------------TRANSPORTE------------------ */

{
    name: 'checklistVtr',
    path: '/checklistvtr',
    component: ChecklistVtr
},{
    name: 'checklistVtrId',
    path: '/checklistvtr/:id',
    component: ChecklistVtrId
},{
    name: 'checklistMoto',
    path: '/checklistmoto',
    component: ChecklistMoto
},{
    name: 'checklistMotoId',
    path: '/checklistmoto/:id',
    component: ChecklistMotoId
},

/*-------------DEN------------------ */
{
    name: 'fichaFuncional',
    path: '/fichafuncional',
    component: FichaFuncional
},{
    name: 'fichaFuncionalId',
    path: '/fichafuncional/:id',
    component: FichaFuncionalId
},

/*-------------ALMOXARIFADO------------------ */
{
    name: 'Uniforme',
    path: '/uniforme',
    component: Uniforme
},{
    name: 'uniformeId',
    path: '/uniforme/:id',
    component: UniformeId
},
{
    name: 'Materiais',
    path: '/materiais',
    component: Materiais
},{
    name: 'materiaisId',
    path: '/materiais/:id',
    component: MateriaisId
},{
    name: 'estoque',
    path: '/almoxarifado',
    component: Estoque
},

/* -------------SEGURANÇA UNIDA--------------------*/

{
    name: 'veiculosRoubados',
    path: '/veiculosroubados',
    component: VeiculosRoubados
},

{
    name: 'veiculosRoubadosId',
    path: '/veiculosroubados/:id',
    component: VeiculosRoubadosId
},{
    name: 'roubosFurtos',
    path: '/roubosefurtos',
    component: RoubosFurtos
},{
    name: 'roubosFurtosId',
    path: '/roubosefurtos/:id',
    component: RoubosFurtosId
},{
    name: 'rouboDeResidencia',
    path: '/rouboderesidencia',
    component: RouboDeResidencia
},{
    name: 'rouboDeResidenciaId',
    path: '/rouboderesidencia/:id',
    component: RouboDeResidenciaId
},{
    name: 'descarteIrregular',
    path: '/descarteirregular',
    component: DescarteIrregular
},{
    name: 'descarteIrregularId',
    path: '/descarteirregular/:id',
    component: DescarteIrregularId
},{
    name: 'acidenteDeTransito',
    path: '/acidentetransito',
    component: AcidenteDeTransito
},{
    name: 'acidenteDeTransitoId',
    path: '/acidentetransito/:id',
    component: AcidenteDeTransitoId
},{
    name: 'denunciaIncendio',
    path: '/denunciaincendio',
    component: DenunciaIncendio
},{
    name: 'denunciaIncendioId',
    path: '/denunciaincendio/:id',
    component: DenunciaIncendioId
},{
    name: 'sosMulher',
    path: '/sosmulher',
    component: SosMulher
},{
    name: 'sosMulherId',
    path: '/sosmulher/:id',
    component: SosMulherId
},{
    name: 'sosIdoso',
    path: '/sosidoso',
    component: SosIdoso
},{
    name: 'sosIdosoId',
    path: '/sosidoso/:id',
    component: SosIdosoId
},{
    name: 'sosMenores',
    path: '/sosmenores',
    component: SosMenores
},{
    name: 'sosMenoresId',
    path: '/sosmenores/:id',
    component: SosMenoresId
},{
    name: 'denunciaVandalismo',
    path: '/denunciavandalismo',
    component: DenunciaVandalismo
},{
    name: 'denunciaVandalismoId',
    path: '/denunciavandalismo/:id',
    component: DenunciaVandalismoId
},{
    name: 'denunciaTrafico',
    path: '/denunciatrafico',
    component: DenunciaTrafico
},{
    name: 'denunciaTraficoId',
    path: '/denunciatrafico/:id',
    component: DenunciaTraficoId
}]

const router = new VueRouter ({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)){
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router
