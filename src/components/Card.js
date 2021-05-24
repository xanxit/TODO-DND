import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
function card({ description}) {
    return (
        <Card style={styles.cardcomponent}>
            <CardContent >
            <Typography gutterBottom>{description}</Typography>
            </CardContent>
        </Card>

    )
}
const styles={
    cardcomponent:{
        marginBottom: 8
    }
}

export default card
