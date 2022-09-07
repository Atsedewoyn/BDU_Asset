<template>
    <div>
        <v-container class="text-center pa-md-10 pa-10 px-15">
            <v-row class="text-center">
                <v-col lg="6" cols="12">
                    <h1 class="ml-10">BIT, Bahir Dar University Asset Dev't Center</h1>
                    <v-divider></v-divider>
                    <pre class="about text-justify mt-5">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut non suscipit, 
                       quidem expedita numquam obcaecati voluptatem, 
                       repellat qui officiis dolor recusandae in nisi quia!
                        Fugiat non dolorum maiores soluta amet!
                    </pre>
                    <h3>Call Us</h3>
                    <p>
                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                        0911248597
                    </p>
                    <p>
                        <v-icon color="indigo">
                            mdi-phone
                        </v-icon>
                        0940599595
                    </p>
                    <div class="text-center ml-15">
                        <v-btn color="secoundary" class="mr-2" fab depressed>
                            <a href="https://www.facebook.com/abayaxionmarket">
                                <v-icon>mdi-facebook
                                </v-icon>
                            </a>
                        </v-btn>
                        <v-btn color="secoundary" class="mr-2" fab depressed>
                            <a href="https://t.me/abayaxionmarket">

                                <!-- <img src="~/assets/social_links/File Telegram_logo.svg"> -->

                            </a>
                        </v-btn>
                        <v-btn color="secoundary" class="mr-2" fab depressed>
                            <v-icon>mdi-telegram
                            </v-icon>
                        </v-btn>
                        <v-btn color="secoundary" class="mr-2" fab depressed>
                            <a href="">
                                <v-icon>mdi-instagram
                                </v-icon>
                            </a>
                        </v-btn>
                    </div>
                </v-col>

            </v-row>
            <br>
            <br>
            <v-row justify="center">

                <v-img
                    src="https://media-exp1.licdn.com/dms/image/C4E1BAQGGkJEg6n2qsg/company-background_10000/0/1640422709610?e=2147483647&v=beta&t=wlI55dp_zafkb8ETLurnx46HaSN5lRcVopLgF9Bd1yo"
                    max-width="900">

                </v-img>


            </v-row>
            <br><br>

        </v-container>
        <AxionSlider />
    </div>
</template>
<script>
export default {
    data() {
        return {
            sm: [
                { icon: "mdi-facebook", link: "https://www.facebook.com/abayaxionmarket" },
                { icon: "mdi-twitter", link: "https://t.me/abayaxionmarket" },
                { icon: "mdi-instagram", link: "https://www.facebook.com/abayaxionmarket" },
                { icon: "mdi-youtube", link: "https://www.facebook.com/abayaxionmarket" },
            ],
        }
    }
};
</script>
<style scoped>
.about {
    font-size: 20px;
}
</style>