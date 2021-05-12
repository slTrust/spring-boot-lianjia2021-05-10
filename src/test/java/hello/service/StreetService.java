package hello.service;

import hello.dao.StreetDao;
import org.springframework.stereotype.Service;
import javax.inject.Inject;

@Service
public class StreetService {
    private StreetDao streetDao;

    @Inject
    public StreetService(StreetDao streetDao) {
        this.streetDao = streetDao;
    }
}
