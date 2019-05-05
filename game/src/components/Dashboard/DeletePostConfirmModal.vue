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
      title: "Confirm delete",
      body: "Are you sure you want to delete this post?",
      closeBtnText: "No, do not delete",
      confirmBtnText: "Yes, delete"
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
