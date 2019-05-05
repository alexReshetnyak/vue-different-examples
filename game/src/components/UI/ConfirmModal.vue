<template>
  <div>
    <mdb-modal :show="dialog" @close="closeModal">
      <mdb-modal-header>
        <mdb-modal-title>{{ this.title }}</mdb-modal-title>
      </mdb-modal-header>

      <mdb-modal-body>{{ this.body }}</mdb-modal-body>

      <mdb-modal-footer>
        <mdb-btn color="white" @click.native="closeModal">
          {{ this.closeBtnText }}
        </mdb-btn>

        <mdb-btn color="danger" @click.native="confirm">
          {{ this.confirmBtnText }}
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn
} from "mdbvue";

export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn
  },
  props: {
    open: Boolean,
    title: String,
    body: String,
    closeBtnText: String,
    confirmBtnText: String
  },
  data() {
    return {
      dialog: false
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

<style lang="scss">
.modal-dialog {
  margin: 9rem auto;
}
</style>
