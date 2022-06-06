<template>
    <div class="paginator" v-show="found">
        <ul class="pages" v-if="total >= perPage">
            <li v-if="page > 1" @click="changepage(page - 1)" class="points">
                prev
            </li>

            <li v-bind:class="{ active: page == item }" @click="changepage(item)"
                v-for="item in Math.ceil(total / perPage)" :key="item">
                {{ item }}
            </li>
            <li v-if="page < Math.ceil(total / perPage)" @click="changepage(page + 1)" class="points">
                next
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Paginator",
    props: {
        found: Boolean,
        total: Number,
        perPage: {
            type: Number,
            default: 20
        },
        page: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {

        }
    },
    methods: {
        changepage(item) {
            this.$emit("changepage", item);
        }
    }
}
</script>

<style>
.paginator {
    max-width: calc(1300px - 40px);
    padding: 20px 20px;
    margin: 0 auto;
    display: flex;
}

.pages {
    list-style: none;
    margin-right: auto;
    margin-left: auto;
}

.pages li {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    margin-bottom: 10px;
    float: left;
    line-height: 1.25;
    color: #00420c;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
}

.active {
    z-index: 1;
    color: #fff !important;
    background-color: #2980b9 !important;
    border: 1px solid #2980b9;
}

.pages li:hover:not(.active) {
    background-color: #ddd;
}
</style>