import { projects } from '../data/projects';
import { Grid, Typography } from '@material-ui/core';
import Project from '@components/Project';
import { Fragment } from 'react';
import Head from 'next/head';

export async function getStaticProps(context) {
    return {
        props: {
            projects: projects
        }
    };
}
export default function Projects({ projects }) {
    return (
        <Fragment>
            <Head>
                <title>Mansfield Web Developer Portfolio | Thomas Adams, Mansfield</title>
                <description>
                    
                    Mansfield Web Developer Portfolio - See the various project from Thomas Adams Web Design and
       
                                Development in Mansfield.
                
                </description>
            </Head>
            <div>
                <Typography gutterBottom align="center" variant="h2" component="h1">
                    Freelance Web Design Portfolio
                </Typography>
                <Typography align="center" variant="body1" paragraph>
                    Listed below are a small selection of the websites I have developed as a freelancer.
                </Typography>
                <Grid container direction="row" alignItems="stretch" spacing={3} justify="space-around">
                    {projects.map((project) => (
                        <Grid key={project.id} item xs={12} md={4} style={{ display: 'flex' }}>
                            <Project {...project} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Fragment>
    );
}
