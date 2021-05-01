<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">
                            {{ title }}
                        </h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <router-link :to="{ name: 'admin' }">Admin</router-link>
                            </li>
                            <template v-if="links.length">
                                <li
                                    class="breadcrumb-item"
                                    v-for="(link, index) in links"
                                    :key="index"
                                >
                                    <router-link
                                        :to="{
                                          name: link.name,
                                          params: link.param ? { id: link.param } : {},
                                        }"
                                    >
                                        {{ link.text }}
                                    </router-link>
                                </li>
                            </template>
                            <li class="breadcrumb-item active">
                                {{ title }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <section id="content" class="content mt-2">
            <div class="container-fluid">
                <slot/>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            default: function () {
                return [];
            },
        },
    },
};
</script>