<template>
    <main>
        <div class="main">
            <div class="user-wrapp">
                <div class="user-profile">
                    <img :src="avatar_url" alt="">
                    <div class="username">
                        <h2>Arno Junio</h2>
                        <span>Membro desde 10/04/2015</span>
                    </div>
                    <div class="user-caption">
                        I'm a passionate web developer from Brazil who loves to build and deliver quality products!
                    </div>
                </div>
                <div class="user-info">
                    <ul>
                        <li><a @click="changeTab('1')">Repositórios</a></li>
                        <li><a @click="changeTab('2')">Gists</a></li>
                        <li><a @click="changeTab('3')">Seguidores</a></li>
                        <li><a @click="changeTab('4')">Seguindo</a></li>
                    </ul>
                    <div v-if="choice == 1" class="user-repositories">
                        <a target="_blank" class="repos-links" v-for="res in repositories" :key="res.id" :href="res.html_url">
                            <div class="user-repo" >
                                <h2>{{ res.name }}</h2>
                                <h6>Atualizado em {{ formatDate(res.updated_at) }}</h6>
                                <p>{{ res.description }}</p>
                            </div>
                        </a>
                    </div>
                    <div v-if="choice == 4" class="user-repositories">
                        <div>
                            <h2>arnojunio</h2>
                            <h6>Atualizado em 18/03/2021</h6>
                            <p>Config files for my GitHub profile.</p>
                        </div>
                        <div>
                            <h2>arnojunio</h2>
                            <h6>Atualizado em 18/03/2021</h6>
                            <p>Config files for my GitHub profile.</p>
                        </div>
                        <div>
                            <h2>arnojunio</h2>
                            <h6>Atualizado em 18/03/2021</h6>
                            <p>Config files for my GitHub profile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            option: "Você selecionou Repositórios",
            choice: 1,
            repositories: []
        }
    },
    props: {
        user: { type: String, required: true },
        avatar_url: { type: String, required: true },
    },
    methods: {
        async getRepos() {
            this.found = false;
            this.$axios.get(`https://api.github.com/users/${this.user}/repos`)
                .then((response) => {
                    this.repositories = response.data
                })
                .catch(function (error) {
                    console.error(error);
                });

        },
        formatDate(date) {
            return date.replace(/(\d{4})-(\d{2})-(\d{2}).*/, "$3/$2/$1");
        },
        changeTab(value) {
            switch (value) {
                case '1':
                    this.option = "Você selecionou Repositórios"
                    this.choice = 1
                    break;
                case '2':
                    this.option = "Você selecionou gists"
                    this.choice = 2
                    break;
                case '3':
                    this.option = "Você selecionou seguidores"
                    this.choice = 3
                    break;
                case '4':
                    this.option = "Você selecionou seguindo"
                    this.choice = 4
                    break;
            }
        },

    },
    created() {
        this.getRepos()
    }
}
</script>

<style>
.user-wrapp {
    max-width: calc(1300px - 40px);
    padding: 0 20px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
}

.user-profile {
    flex-basis: 31%;
    padding: 0 10px;
}

.user-profile img {
    width: 100%;
}

.user-info {
    flex-basis: 55%;
    padding: 0 20px;
    margin-top: 10px;
}

.user-info .user-repositories {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-radius: 2px;
}

.user-repo {
    border-bottom: 1px solid #dddddd;
    padding: 10px 20px;
}

.user-repo:hover {
    background: #ccc;
}

.user-repo h2,
.user-repo h6,
.user-repo p {
    margin-bottom: 10px;
}

.user-repo p {
    font-size: 1em;
}

.user-repo h6 {
    font-size: 0.875em;
    font-weight: 300;
}

.user-repo h2 {
    margin-top: 10px;
    font-weight: 500;
    font-size: 1.2em;
}

.user-info ul {
    display: flex;
    align-items: stretch;
}

.user-info a {
    color: #777777;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    cursor: pointer;
    padding: 10px 20px;
}
.repos-links{
    text-decoration: none;
    border:none !important;
    padding: 0 !important;
}

.username {
    position: absolute;
    bottom: 0;
    margin: 0 20px;
    color: #fff;
}

.username>h2 {
    font-size: 27px;
    font-weight: lighter;
    position: relative;
    margin: 31px 0 4px;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px #000;
}
</style>