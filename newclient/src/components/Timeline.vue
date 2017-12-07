<template>
  <div>
    <Navbar></Navbar>
    <Tasktable></Tasktable>
    <Modal></Modal>
    <Editmodal></Editmodal> 
  </div>
</template>

<script>
import Navbar from './Navbar'
import Modal from './AddtaskModal'
import Tasktable from './Tasktable'
import Editmodal from './EdittaskModal'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar,
    Modal,
    Tasktable,
    Editmodal
  },
  methods: {
    ...mapActions([
      'getAllTodoList'
    ])
  },
  created () {
    this.getAllTodoList()
  }
}
</script>

<style>

</style>
