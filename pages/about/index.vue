<template>
    <div>
        <v-container class="text-center pa-md-10 pa-10 px-15">
            <v-row class="text-center">
                <v-col lg="6" cols="12">
                    <h1 class="ml-10">ዓባይ ኤጀንሲ Abay Agency</h1>
                    <v-divider></v-divider>
                    <pre class="about text-justify mt-5">
                        ዘመናዊና ፕሮፌሽናል ግብይቶች እንዲካሄዱ አስፈላጊ መረጃዎችን ለገዥና ለሻጭ በማድረስ የተሳለጠ የገበያ ሥርዓት
                        እንዲፈጠር ይሠራል፡፡አክሲዮን ላይ ገንዘብወን ያፈሰሱ ኢንቨስተሮችም በቀላሉ ሐብታቸውን
                        ወደ ገንዘብ መቀየር ሲፈልጉ በወቅቱ የገበያ ዋጋ እንዲሸጡ የመገበያያ መድረክ(Market Place) ሆኖ ያገለግላል፡፡

                        Abay Security market works to make Share market
                        one potential investment option for investors in Ethiopia.
                        For those who have invested on share, Abay will serve as
                        a market place to change their asset to liquid money.
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
                    src="https://scontent.fbjr1-1.fna.fbcdn.net/v/t1.6435-9/128017219_172342564596145_1310791303792031709_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gStx_93AtokAX_Vmbc2&_nc_ht=scontent.fbjr1-1.fna&oh=00_AT-jjbMavns07y47sKqnLoODB9M3oL36qX2XlyQ5dVTNJQ&oe=6323386A"
                    max-width="700">

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