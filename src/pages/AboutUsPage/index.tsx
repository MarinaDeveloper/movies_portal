import React from "react";
import routeAboutUs from "./routes";

import image from 'assets/image/image.png';

import { Grid,Typography }  from "@mui/material";

const AboutUsPage = () => {
    return (
        <Grid component='section' container spacing={3} mb={8}>
            <Grid item  xs={12} md={4} >
                <img 
                    style={{
                        width: '100%',
                        borderRadius: 20,
                    }}
                    src={image}
                    alt='movie poster'
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant="h4" component="h4" sx={{fontWeight: '700'}} mb={2}>MOVIESinfo</Typography>
                <Typography component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae saepe nam accusantium dolorum corrupti tempore ratione nisi, vel quasi repellendus veniam, repudiandae temporibus ipsa expedita, molestias quidem sit. Non?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae saepe nam accusantium dolorum corrupti tempore ratione nisi, vel quasi repellendus veniam, repudiandae temporibus ipsa expedita, molestias quidem sit. Non?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae saepe nam accusantium dolorum corrupti tempore ratione nisi, vel quasi repellendus veniam, repudiandae temporibus ipsa expedita, molestias quidem sit. Non?
                </Typography>
            </Grid>
        </Grid>
    )
}

export {routeAboutUs};

export default AboutUsPage;