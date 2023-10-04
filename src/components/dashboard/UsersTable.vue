<template>
    <div class="table">
        <table>
            <tr>
                <th>{{ text }}</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>

            <tr v-for="user in users" :key="user.id" class="user">

                <td>{{ user.id }}</td>
                <td>{{ user.firstName }} {{ user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td><span class="material-icons action"
                        @click="action(`${user.firstName} ${user.lastName}`)">more_vert</span> </td>

            </tr>

        </table>

        <div class="pagination">
            <h2>Page</h2>
            <div class="nav-buttons">
                <button>Prev</button>
                <button>Next</button>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IUsers } from '@/Types/IUsers';

defineProps({
    text: { type: String, required: true },
    users: { type: Array as PropType<IUsers[]>, required: true }
})

const action = (user: string) => {
    alert(`Take me to ${user}'s page`)
}

</script>

<style scoped>
table {
    margin: 10px auto;
    text-align: center;
    width: 60%;
}

th,
td {
    padding: 10px;
}

th {
    color: #797676;
    font-family: Work Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    border-bottom: 2px solid #B9BBBE;

}

td {
    color: #797676;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    border-bottom: 1px solid #B9BBBE;

}

.pagination {
    display: flex;
    width: 60%;
    margin: 30px auto;
    justify-content: space-between;
    align-items: center;
}

h2 {
    color: #31394E;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.nav-buttons {
    display: flex;
    gap: 33px;
}

.nav-buttons button {
    width: 54px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #F6F6F6;
    box-shadow: 0px 2px 10px -2px rgba(0, 0, 0, 0.25);
    border: none;
    color: #31394E;
    font-family: Work Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.action {
    padding: 5px;
}

.action:hover {
    background-color: rgb(209, 209, 209);
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
}

.user:hover {
    background: rgb(230, 230, 230)
}
</style>