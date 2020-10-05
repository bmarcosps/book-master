import React from 'react';
import { Link} from 'react-router-dom';
import { Breadcrumbs, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Book from '@material-ui/icons/Book';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
      textDecoration: 'none',
      color: theme.palette.primary.light
    },
    links: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    
  }),
);

interface CustomBreadcrumbsProps {
  path?: string[]
}

const CustomBreadcrumbs: React.FC<CustomBreadcrumbsProps> = (props) => {
  const classes = useStyles();
  
  return (
    
    <Breadcrumbs className={classes.links} aria-label="breadcrumb">
      <Link color="inherit" to="/" className={classes.link}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      {
        props.path ?
        props.path.map( (pt, index) => { return (
          <Typography key={index} color="textPrimary" className={classes.link}>
            <Book className={classes.icon} />
            {pt}
          </Typography>)
        }) : ""
      }
    </Breadcrumbs>
  );
}

export default CustomBreadcrumbs;
