import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { formStyles } from "../../styles/styles";
import {
  getProductById,
  updateProduct,
  addNewProduct
} from "../../services/productListService";

function ProductForm({ match, history, classes }) {
  const [data, setData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: "",
    bestSeller: ""
  });

  async function fetchProductById(id) {
    try {
      const product = await getProductById(id);
      setData(product.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const id = match ? match.params.id : null;
    fetchProductById(id);
  }, []);

  const handleInputChange = event => {
    const updatedData = { ...data, [event.target.name]: event.target.value };
    setData(updatedData);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (match.params.id) {
        await updateProduct(data, match.params.id);
        history.push("/admin/products");
        return;
      }
      await addNewProduct(data);
      history.push("/admin/products");
    } catch (err) {
      console.log(err);
    }
  };

  const { name, price, imageUrl, description, bestSeller } = data;
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          {match.params.id ? "Edit Product" : "Add New Product"}
        </Typography>
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Product Name"
            name="name"
            fullWidth
            value={name}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: !!name
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Price"
            name="price"
            fullWidth
            value={price}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: !!price
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Best Seller"
            name="bestSeller"
            fullWidth
            value={bestSeller}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: !!bestSeller
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Image Url"
            name="imageUrl"
            fullWidth
            value={imageUrl}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: !!imageUrl
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Description"
            name="description"
            fullWidth
            value={description}
            onChange={handleInputChange}
            className={classes.textField}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: !!description
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {match.params.id ? "Save" : "Add"}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(formStyles)(ProductForm);
