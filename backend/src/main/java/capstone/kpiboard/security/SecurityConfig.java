package capstone.kpiboard.security;

import capstone.kpiboard.service.user.AppUserService;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfig {
    private final AppUserService appUserService;

    public SecurityConfig(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()

                .authorizeRequests()
                .antMatchers("api/").permitAll()
                .antMatchers("api/admin/*").authenticated()
                .antMatchers("api/my-kpi/*").authenticated()
                .and().httpBasic()
                .and().build();
    }

    @Bean
    public UserDetailsManager userDetailsService() {
        return new UserDetailsManager() {
            @Override
            public void createUser(UserDetails user) {
                throw new UnsupportedOperationException();
            }

            @Override
            public void updateUser(UserDetails user) {
                throw new UnsupportedOperationException();
            }

            @Override
            public void deleteUser(String username) {
                throw new UnsupportedOperationException();
            }

            @Override
            public void changePassword(String oldPassword, String newPassword) {
                throw new UnsupportedOperationException();
            }

            @Override
            public boolean userExists(String username) {
                throw new UnsupportedOperationException();
            }

            @Override
            public User loadUserByUsername(String username) {
                return appUserService.loadUserByUsername(username);
            }
        };
    }
}
