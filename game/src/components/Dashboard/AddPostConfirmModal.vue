<template>
  <div>
    <comp-confirmModal
      :open="dialog"
      :title="title"
      :body="body"
      :closeBtnText="closeBtnText"
      :confirmBtnText="confirmBtnText"
      @close="closeModal"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import compConfirmModal from "../UI/ConfirmModal.vue";

export default {
  components: { compConfirmModal },
  props: {
    open: Boolean
  },
  data() {
    return {
      dialog: false,
      title: "Confiramtion",
      body: "Your post has no content, are you sure you want to post this?",
      closeBtnText: "Oop, I want to add it.",
      confirmBtnText: "Yes I'm sure"
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    confirm() {
      this.$emit("confirm");
    }
  },
  created() {
    this.dialog = this.open;
  },
  watch: {
    open(newVal) {
      this.dialog = newVal;
    }
  }
};
</script>
