<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link" target="_blank">
            <div class="image">
                <img :src="logo" class="img-fluid" />
            </div>
        </a>

        <div class="sidebar">
            <div
                class="user-panel d-flex align-items-center py-2"
                style="color: white; font-weight: bold"
            >
                ADMINISTRATOR
            </div>
            <nav class="mt-2 pb-5">
                <ul
                    class="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                >
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-th-large nav-icon"></i>
                            <p>Kategorije</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
        },
    },
};
</script>