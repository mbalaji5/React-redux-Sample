export const Add_Todo = "ADD_TODO";
export const Remove_Todo = "ADD_TODO";

export const AddTodo = text => {
  return { type: Add_Todo, text: text };
};

export const RemoveTodo = Id => {
  return { type: this.Remove_Todo, index: Id };
};
