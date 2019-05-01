<template>
  <div class="dashboard_form">
    <h1>Add Post</h1>

    <form @submit.prevent="submitHandler">

      <div v-if="imageUpload">
        <img :src="imageUpload" alt="Uploaded image">
      </div>

      <div class="input_fielld">
        <input
          type="file"
          @change="processFile($event)"
          ref="myFileInput"
        />
      </div>

      <div class="input_field" :class="{ invalid: $v.formData.title.$error }">
        <label>Title</label>

        <input
          type="text"
          @blur="$v.formData.title.$touch()"
          v-model="formData.title"
        />

        <p class="error_label" v-if="$v.formData.title.$error">
          This input is required
        </p>
      </div>

      <div class="input_field" :class="{ invalid: $v.formData.desc.$error }">
        <label>Description</label>

        <input
          type="text"
          @blur="$v.formData.desc.$touch()"
          v-model="formData.desc"
        />

        <p class="error_label" v-if="$v.formData.desc.$error">
          This input is required
        </p>

        <p class="error_label" v-if="!$v.formData.desc.maxLength">
          Must not be greater then
          {{ $v.formData.desc.$params.maxLength.max }}
          characters
        </p>
      </div>

      <div class="input_field">
        <wysiwyg v-model="formData.content" />
      </div>

      <div :class="{ invalid: $v.formData.rating.$error }" class="input_field">
        <label>Rating</label>
        <select @blur="$v.formData.rating.$touch()" v-model="formData.rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <p class="error_label" v-if="$v.formData.rating.$error">
          Tou need to select at least one
        </p>
      </div>

      <button type="submit">Add Post</button>
    </form>

    <comp-modal
      :open="dialog"
      @close="dialogOnCancel"
      @confirm="dialogOnConfirm"
    />

    <div v-if="addpost" class="post_successfull">
      Your post was posted
    </div>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators";
import compModal from "./AddPostConfirmModal";

export default {
  components: {
    compModal
  },
  data() {
    return {
      formData: {
        title: "",
        desc: "",
        content: "",
        rating: "",
        img: ""
      },
      dialog: false
    };
  },
  validations: {
    formData: {
      title: {
        required
      },
      desc: {
        required,
        maxLength: maxLength(100)
      },
      content: {},
      rating: {}
    }
  },
  computed: {
    addpost() {
      const status = this.$store.getters["admin/addPostStatus"];
      if (status) {
        this.clearPost();
        this.$store.commit("admin/clearImageUpload");
      }
      return status;
    },
    imageUpload() {
      const imgUrl = this.$store.getters["admin/imageUpload"];
      this.formData.img = imgUrl;

      return imgUrl;
    }
  },
  methods: {
    submitHandler() {
      if (!this.$v.$invalid) {
        if (this.formData.content === "") {
          this.dialog = true;
        } else {
          this.addPost();
        }
      } else {
        alert("This not ready yeat");
      }
    },
    dialogOnCancel() {
      this.dialog = false;
    },
    dialogOnConfirm() {
      this.dialog = false;
      this.addPost();
    },
    addPost() {
      this.$store.dispatch("admin/addPost", this.formData);
    },
    clearPost() {
      this.$v.$reset(); // * clear all validation information
      
      this.$refs.myFileInput.value = ""; // * clear image input

      this.formData = {
        title: "",
        desc: "",
        content: "",
        rating: ""
      };
    },
    processFile(event) {
      const file = event.target.files[0];
      this.$store.dispatch("admin/imageUpload", file);
    }
  },

  destroyed() {
    this.$store.commit("admin/clearImageUpload");
  },
};
</script>

<style lang="scss" scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

h1 {
  font-weight: 900;
}

.input_field.invalid {
  input,
  select {
    border: 1px solid red;
  }
}
</style>
