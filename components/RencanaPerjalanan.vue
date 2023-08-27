<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ plan.title }}</h5>
      <p class="card-text">{{ plan.description }}</p>
      <div v-for="destination in plan.destinations" :key="destination._id">
        <h6 class="card-subtitle mb-2 text-muted">{{ destination.name }}</h6>
        <p class="card-text">{{ destination.description }}</p>
        <ul class="list-unstyled">
          <li v-for="(activity, index) in destination.activities" :key="index">
            {{ activity }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
