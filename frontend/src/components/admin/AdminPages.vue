<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração"
            sub="Cadastros de RO"/>
        <div class="admin-pages-tabs">
            
                        <UserAdmin/>
        
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import RoAdmin from './RoAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: "AdminPages",
    components: { PageTitle, RoAdmin, UserAdmin }    
}
</script>

<style>
.admin-pages{
    padding: 20px;
}
</style>

