<template>
    <main>
        <div class="main">
            <div class="user-wrapp">
                <div v-if="found" class="user-profile">
                    <img :src="user.avatar_url" alt="">
                    <div class="username">
                        <h2>{{ user.login }}</h2>
                        <span>Membro desde {{ formatDate(user.created_at) }}</span>
                    </div>
                    <div class="user-caption">
                        {{ user.bio }}
                    </div>
                </div>
                <div v-show="show" class="user-info fade_in">
                    <ul>
                        <li><a class="tab-links" @click="changeTab('1')">Repositories</a></li>
                        <li><a class="tab-links" @click="changeTab('2')">Gists</a></li>
                        <li><a class="tab-links" @click="changeTab('3')">Followers</a></li>
                        <li><a class="tab-links" @click="changeTab('4')">Following</a></li>
                    </ul>
                    <div id="repos" v-if="choice == 1" class="user-repositories">
                        <a target="_blank" class="repos-links" v-for="repo in repositories" :key="repo.id"
                            :href="repo.html_url">
                            <div class="user-repo">
                                <h2>{{ repo.name }}</h2>
                                <h6>Atualizado em {{ formatDate(repo.updated_at) }}</h6>
                                <p>{{ repo.description }}</p>
                            </div>
                        </a>
                    </div>
                    <div  v-if="choice == 2" class="user-repositories">
                        <a target="_blank" class="repos-links" v-for="gist in gists" :key="gist.id"
                            :href="gist.html_url">
                            <div class="user-repo">
                                <h2>{{ gist.name }}</h2>
                                <h6>Atualizado em {{ formatDate(gist.created_at) }}</h6>
                                <p>{{ gist.description }}</p>
                            </div>
                        </a>
                    </div>
                    <div v-if="choice == 4" class="user-following">

                        <div class="card fade-in" v-for="flw in following" :key="flw.id">
                            <router-link class="repos-links"
                                :to="{ name: 'app.user', params: { username: flw.login } }">
                                <div class="img"><img :src="flw.avatar_url" alt="avatar">
                                </div>
                                <h4><b>{{ flw.login }}</b></h4>
                            </router-link>

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
            choice: 0,
            results: [],
            repositories: [],
            following: [],
            gists: [],
            endpoint: "",
            user: null,
            found: false,
            response: null,
            show: false
        }
    },
    props: {
        username: { type: String, required: true }
    },
    watch: {
        username() {
            
        }
    },
    methods: {
        async getData(endpoint = "") {
            await this.$axios.get(`https://api.github.com/users/${this.username}${endpoint}`)
                .then((response) => {
                    this.response = response.data;
                    this.processResponse(this.response);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        processResponse(response) {
            if (!this.user) {
                this.user = response;
                this.found = true;
            } else if (this.endpoint == "/repos") {
                this.repositories = response;
            } else if (this.endpoint == "/gists") {
                if (response.length) {
                    for (let i = 0; i < response.length; i++) {
                        let f = null;
                        for (let file in response[i].files) {
                            f = file;
                        }
                        this.gists[i] = { name: f, created_at: response[i].created_at, description: response[i].description, html_url: response[i].html_url }
                    }
                } else {
                    console.log("Nenhum resultado obtido!");
                }
            } else if (this.endpoint == "/following") {
                this.following = response;
            }
        },
        showUserInfo() {
            setTimeout(() => { this.show = true }, 1000);
        },
        formatDate(date) {
            return date.replace(/(\d{4})-(\d{2})-(\d{2}).*/, "$3/$2/$1");
        },
        changeTab(value) {
            switch (value) {
                case '1':
                    this.choice = 1;
                    this.endpoint = "/repos";
                    (!this.repositories.length ? this.getData(this.endpoint) : "");
                    break;
                case '2':
                    this.choice = 2
                    this.endpoint = "/gists";
                    (!this.gists.length ? this.getData(this.endpoint) : "");
                    break;
                case '3':
                    this.choice = 3
                    break;
                case '4':
                    this.choice = 4
                    this.endpoint = "/following";
                    (!this.following.length ? this.getData(this.endpoint) : "");
                    break;
            }
        },
        getUserGists() {
            this.endpoint = "/gists";

        }

    },
    created() {
        this.getData();
        this.showUserInfo();
    }
}
</script>

<style>
.user-wrapp {
    max-width: calc(1300px - 40px);
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.user-profile {
    flex-basis: 31%;
    position: relative;
    padding: 0 10px;
    height: 20%;
}

.user-profile img {
    width: 100%;
}

.user-info {
    flex-basis: 55%;
    padding: 0 10px;
    margin-top: 10px;
}

.user-info .user-repositories {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-radius: 2px;
}

.user-following {
    display: flex;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-radius: 2px;
    flex-wrap: wrap;
    justify-content: space-around;
}

.user-following img {
    width: 100%;
    display: block;
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
    border: 1px solid #dddddd;
}

.user-info a {
    color: #777777;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
    padding: 10px 20px;
}

.repos-links {
    text-decoration: none;
    border: none !important;
    padding: 0 !important;
}

.username {
    text-align: center;
}

.user-caption {
    padding: 0 10px;
    text-align: justify;
    font-size: 0.875em;
    margin: 20px 0;
}

.username>h2 {
    font-size: 1.2em;
    text-align: center;
}

.fade_in {
    -webkit-animation: fade_in 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: fade_in 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes fade_in {
    0% {
        -webkit-transform: translateZ(-80px);
        transform: translateZ(-80px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}

@keyframes fade_in {
    0% {
        -webkit-transform: translateZ(-80px);
        transform: translateZ(-80px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        opacity: 1;
    }
}


@media (max-width: 30em) {
    .user-profile {
        flex-basis: 95%;
        background: #fff;
        padding: 0 10px;
        border-radius: 10%;
        margin: 0 auto;
    }

    .user-profile img {
        width: 40%;
        border-radius: 50%;
        display: block;
        margin: 10px auto;
    }

    .main-header-content h1 a {
        font-size: 0.75em;
    }

    .tab-links {
        display: block;
        padding: 20px 20px !important;
        text-align: center;
        background-color: #2980b9 !important;
        border-bottom: 1px solid #fff !important;
        color: #FFF !important;
        font-weight: 500;
    }

    .user-info ul {
        display: block;
    }

    .user-info {
        flex-basis: 100%;
    }
}
</style>