<template>
    <div>
        <b-row no-gutters>
            <b-col md="3">

            </b-col>
            <b-col md="5">
                <h4>About</h4>
            </b-col>
            <b-col md="2" v-if="isUser">
                <h4>Action</h4>
            </b-col>
            <b-col md="2" v-if="isUser">
                <h4>Status</h4>
            </b-col>
        </b-row>
        <b-card no-body class="overflow-hidden" style="width: 100%;"
                v-for="(project, index) in createdProjects" :key="index">
            <b-row no-gutters>
                <b-col md="3">
                    <b-card-img :src="project.project_image_url" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="5">
                    <b-card-body :title="project.project_name">
                        <b-card-text>
                            <p>{{project.project_description}}</p>
                        </b-card-text>
                    </b-card-body>
                </b-col>
                <b-col md="2" v-if="isUser">
                    <br>
                    <b-button variant="success" @click="editCreatedProject(project.project_name)">Edit</b-button>
                    <br><br>
                    <b-button variant="danger" @click="deleteCreatedProject(project.project_name)">Delete</b-button>
                </b-col>
                <b-col md="2" v-if="isUser">
                    <br>
                    <b-button
                            v-if="project.ended && fullyFunded(project)"
                            pill variant="success">Funded</b-button>
                    <b-button
                            v-if="project.ended && !fullyFunded(project)"
                            pill variant="dark">Unsuccessful</b-button>
                    <b-button
                            v-if="!project.ended"
                            pill variant="info">Ongoing</b-button>
                </b-col>
            </b-row>
        </b-card>
    </div>

</template>

<script>
    export default {
        name: "ProjectsCreatedSection",
        props: {
            createdProjects: Array
        },
        computed: {
            // Check if the current profile viewed belongs to the login user
            isUser() {
                return this.$store.state.user.email == this.$route.params.email
            }
        },
        methods: {
            deleteCreatedProject(projectName) {
                console.log("projectName is " + projectName)
                this.$emit("delete:createdProject", projectName)
            },
            editCreatedProject(projectName) {
                this.$router.push("/editProject/" + projectName)
            },
            fullyFunded(project) {
                return parseFloat(project.project_funding_received) >= parseFloat(project.project_funding_goal)
            },
        }
    }
</script>

<style scoped>
    b-card-group {
        width: 500px;
    }
</style>