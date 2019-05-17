export const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
  
export const productTableStyles = theme => ({
    paper: {
      padding: "50px"
    },
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    button: {
      margin: theme.spacing.unit
    },
    fab: {
      margin: theme.spacing.unit
    },
    image: {
      width: "300px"
    }
  });

  export const formStyles = theme => ({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      },
      paddingBottom: theme.spacing.unit * 10,
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  });

  export const navBarStyles = theme => ({
    root: {
      flexGrow: 1,
      background: "#000066",
      width: "100%"
    },
    typography: {
      flexGrow: 1
    },
    link: {
      color: "#e6e6ff",
      paddingRight: theme.spacing.unit * 3,
      "&:hover": {
        textDecoration: "none",
        color: "#b3b3ff"
      },
      "&:active": {
        color: "#e6ffe6"
      }
    }
  });