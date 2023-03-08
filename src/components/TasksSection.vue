<template>
  <section class="bg-indigo-lighten-4 py-10">
    <h1 class="text-h4 font-italic text-center px-4">ToDoList With Vue</h1>

    <v-container>
      <v-row>
        <v-col cols="12" lg="4">
          <v-img src="/to_do_list.svg" class="py-6"></v-img>
        </v-col>
        <v-col cols="12" lg="5">
          <v-card>
            <v-card-title></v-card-title>
            <v-form @submit.prevent="addTodo">
              <v-card-text>
                <!-- add Message if error with enter Task or success enter  -->
                <div
                  v-if="message"
                  class="msg"
                  :class="messageClass"
                  v-text="message"
                ></div>

                <v-divider class="mx-4" inset vertical></v-divider>
                <!-- add text field for add task  -->
                <v-text-field
                  class="px-2"
                  clearable
                  placeholder="New Task"
                  variant="underlined"
                  color="indigo"
                  v-model="newTodo"
                />
                <v-btn
                  type="submit"
                  class="px-6"
                  rounded="pill"
                  color="purpleme"
                >
                  New Task
                </v-btn>
                <!-- add V-for because show all tasks  -->
                <todo-item
                  v-for="(todo, index) in filteredList"
                  :key="todo.id"
                  :todo="todo"
                  :index="index"
                  @removeTodo="removeTodo"
                  @finishedEdit="finishedEdit"
                  :checkAll="!anyRemaining"
                >
                </todo-item>
                <!-- add checkbox for complete all task  -->
                <div class="extra-container">
                  <div>
                    <label
                      ><input
                        type="checkbox"
                        :checked="!anyRemaining"
                        @change="checkAllTodos"
                      />
                      Check All</label
                    >
                  </div>
                  <!-- remaining refers number task not completed -->
                  <div>{{ remaining }} items left</div>
                </div>
                <div class="extra-container">
                  <!-- <div>
        <v-btn class="bg-success" :class="{ active: filter == 'all' }" @click="filter = 'all'">All</v-btn>
        <v-btn :class="{ active: filter == 'active' }" @click="filter = 'active'">Active</v-btn>
        <v-btn :class="{ active: filter == 'completed' }" @click="filter = 'completed'">Completed</v-btn>
      </div> -->
                  <div>
                   <!-- add button  Clear Completed when i find task   Completed -->
                    <transition name="fade">
                      <v-btn
                        class="error"
                        v-if="showClearCompletedButton"
                        @click="clearCompleted"
                      >
                        Clear Completed
                      </v-btn>
                    </transition>
                  </div>
                  <!-- add text-field search when if you search about any task  -->
                  <v-text-field
                    class="bg-indigo-lighten-2 w-50"
                    pills
                    :loading="loading"
                    density="compact"
                    variant="text"
                    v-model.trim="searchValue"
                    label="Search Task"
                    append-inner-icon="mdi-magnify"
                    single-line
                    hide-details
                    @click:append-inner="onClick"
                  ></v-text-field>
                </div>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
        <!-- <input type="search" placeholder="Name" v-model.trim="searchValue"> -->
        <!-- <ul class="items">
        <li >
        </li>
      </ul> -->
      </v-row>
      <!-- <AllTaskSection/> -->
    </v-container>
  </section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  components: { TodoItem },
  data() {
    return {
      loaded: false,
      loading: false,
      message: "",
      messageClass: "",
      newTodo: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "Finish Vue Screencast",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Take over world in test",
          completed: false,
          editing: false,
        },
        {
          id: 3,
          title: "Watch course in vuejs",
          completed: false,
          editing: false,
        },
      ],
      Name: "",

      TasksList: [],
      searchValue: "",
    };
  },
  computed: {

    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    //filteredList refers method for search
    filteredList() {
      return this.todos.filter((task) => {
        return task.title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      });
    },
    //
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    //addtodo is method for add task and i call showMsg for show suitable message
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        this.showMsg("Please enter value field", true);
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      });
      this.showMsg("Task was Added");
      this.newTodo = "";
      this.idForTodo++;
    },
    //removeTodo is method for remove task
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    // editTodo(todo) {
    //   this.beforeEditCache = todo.title;
    //   todo.editing = true;
    // },
    // doneEdit(todo) {
    //   if (todo.title.trim() == "") {
    //     todo.title = this.beforeEditCache;
    //   }
    //   todo.editing = false;
    // },
    // cancelEdit(todo) {
    //   todo.title = this.beforeEditCache;
    //   todo.editing = false;
    // },
      // /checkAllTodos is method for check on complete task
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },

    //clearCompleted is method clear all completed
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    },
    // addToList() {
    //   if (this.Name === '' ) {
    //     this.showMsg('Please enter value field', true)
    //     return;
    //   }

    //   this.TasksList.push(`${this.Name}`)
    //   this.showMsg('Task was Added')

    //   this.Name = ''

    // },

    showMsg(message, isError = false, duration = 3000) {
      if (isError) this.messageClass = "error";
      else this.messageClass = "success";

      this.message = message;

      setTimeout(this.removeMsg, duration);
    },

    removeMsg() {
      this.message = "";
      this.messageClass = "";
    },
  },
};
</script>
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

ul {
  list-style: none;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
}
.tod .remove-item {
  margin-left: 14px;
  cursor: pointer;
}
ul li {
  padding: 5px;
  background: #fc3;
  color: black;
  margin: 5px 0;
}
.msg {
  color: #333;
  padding: 5px;
  margin: 5px;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
.error {
  background: rgb(255, 0, 43);
}
.active {
  background-color: lightgreen;
}
.success {
  background: lightgreen;
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
// CSS Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
