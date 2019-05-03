import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { productTableStyles } from "../../styles/styles";
import { useAllProducts } from "../../services/hookService";
import { deleteProduct } from "../../services/productListService";

function ProductTable({ classes }) {
  const { productList } = useAllProducts();

  const handleDelete = async productId => {
    try {
      const product = { _id: productId };
      await deleteProduct(product);
    } catch (err) {
      console.log(err);
    }
  };

  let counter = 1;
  return (
    <Grid container item xs={12} className={classes.paper}>
      <div>
        <h2>Products</h2>

        <Link to="/admin/products/new">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add Product
          </Button>
        </Link>
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">No.</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Price (S$)</TableCell>
                <TableCell align="left">Image Url</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Best Seller</TableCell>
                <TableCell align="center">Delete</TableCell>
                <TableCell align="center">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productList.map(product => (
                <TableRow key={product._id}>
                  <TableCell align="right">{counter++}</TableCell>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">
                    {product.price.toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      alt=""
                      src={product.imageUrl}
                      className={classes.image}
                    />
                  </TableCell>
                  <TableCell align="right">{product.description}</TableCell>
                  <TableCell align="right">{product.bestSeller}</TableCell>

                  <TableCell align="center">
                    <Link to={`/admin/products/${product._id}`}>
                      <Fab
                        color="secondary"
                        aria-label="Edit"
                        className={classes.fab}
                      >
                        <EditIcon />
                      </Fab>
                    </Link>
                  </TableCell>

                  <TableCell align="center">
                    <Fab
                      color="secondary"
                      aria-label="Delete"
                      className={classes.fab}
                      onClick={() => handleDelete(product._id)}
                    >
                      <DeleteIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </Grid>
  );
}
export default withStyles(productTableStyles)(ProductTable);
