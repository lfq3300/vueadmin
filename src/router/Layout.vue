<template>
    <div class="layout">
        <admin-header></admin-header>
        <admin-left></admin-left>
    </div>    
</template>
<script>
import AdminHeader from '@/components/AdminHeader'
import AdminLeft from '@/components/AdminLeft'
export default {
    components:{ AdminHeader, AdminLeft},
    name:'layout',
}
</script>
