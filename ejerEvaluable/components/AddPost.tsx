import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="AddPost" action="/add" method="post">
      <h1>Add Post</h1>
      <input type="title" name="title" placeholder="Name" />
      <input type="author" name="autor" placeholder="Author" />
      <input type="content" name="content" placeholder="Content" />
      <button type="submit">Publish</button>
    </form>
  );
};

export default AddForm;