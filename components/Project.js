import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%'
    },
    media: {
        height: 200
    },
    date: {
        marginLeft: 'auto !important'
    }
});

export default function Project({ description, frameworks, image, productionYear, title, url }) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia className={classes.media} image={image} title={`Preview image of ${title} website.`} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {description}
                    </Typography>
                    <Typography component="h3">Built with</Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {frameworks.map((framework, index) => (
                            <Link
                                key={framework.id}
                                href={framework.url}
                                title={`Visit the ${framework.name} website.`}
                                target="_blank"
                                rel="noopener"
                                rel="noreferrer">
                                {framework.name}
                                {index === frameworks.length - 1 ? null : ', '}
                            </Link>
                        ))}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    href={url}
                    title={`Navigate to ${title} website.`}
                    target="_blank"
                    rel="noopener"
                    rel="noreferrer">
                    Visit {title}
                </Link>
                <Typography className={classes.date} variant="caption" component="span">
                    {productionYear}
                </Typography>
            </CardActions>
        </Card>
    );
}
