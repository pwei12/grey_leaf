import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { styles } from '../../styles/styles'
import {
  getProductById,
  updateProduct,
  addNewProduct
} from "../../services/productListService";

const ProductForm = ({ match, history, classes }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: "",
    bestSeller: ""
  });

  async function fetchProductById(id) {
    try{
      const product = await getProductById(id);
      setData(product.data);
    }catch (err) {
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
    <div className="pb-5">
      <form className={classes.container}>
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
      </form>
      <button onClick={handleSubmit}>{match.params.id ? "Save" : "Add"}</button>
    </div>
  );
};

export default withStyles(styles)(ProductForm);
