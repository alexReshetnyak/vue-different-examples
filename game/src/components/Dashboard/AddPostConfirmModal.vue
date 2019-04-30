<template>
  <div>
    <mdb-modal :show="dialog" @close="closeModal">
      <mdb-modal-header>
        <mdb-modal-title>Confiramtion</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        Your post has no content, are you sure you want to post this?
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="primary" @click.native="closeModal">
          Oop, I want to add it.
        </mdb-btn>
        <mdb-btn color="primary">Yes I'm sure</mdb-btn>
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
    open: Boolean
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
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
