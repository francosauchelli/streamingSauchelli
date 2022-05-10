import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import { Card,
    CardActionArea,
    CardContent,
    CardActions 
    } from '@mui/material';
// style
import './style/preloader.css'


function Media(props) {
    let { loading } = props;
    
    return (
        loading ? (
        <div className="skeleton-container">
            <Card className="item-card" sx={{ maxWidth: 345, m: 2 }}>
                <CardActionArea>
                    <Skeleton className="skeleton-img" 
                            sx={{ height: 140 }} 
                            animation="wave" 
                            variant="rectangular" />
                    <CardContent className="skeleton-content" sx={{ height: 138, width: 250 }}>
                        {
                            <React.Fragment>
                                <Skeleton animation="wave" height={20} style={{ marginBottom: 20 }} />
                                <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 8 }} />
                                <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 8 }} />
                                <Skeleton animation="wave" height={10} width="80%" />
                            </React.Fragment>
                        }
                    </CardContent>
                </CardActionArea>
                <CardActions className="skeleton-actions">
                    <Skeleton animation="wave" height={15} width="80%" style={{ marginBottom: 6 }} />
                </CardActions>
            </Card>
        </div> 
        ) 
        : (<></>)
    )
}


Media.propTypes = {
loading: PropTypes.bool,
};

export default function Facebook({loading}) {
    return (
        <div>
            <Media loading={ loading } />
            <Media loading={ loading } />
            <Media loading={ loading } />
            <Media loading={ loading } />
        </div>
        );
    }