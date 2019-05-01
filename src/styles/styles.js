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